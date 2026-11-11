"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./Button";
import { RevealText, FadeIn } from "./MotionPrimitives";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company / Organization name must be at least 2 characters"),
  email: z.string().email("Please provide a valid business email address"),
  phone: z
    .string()
    .min(10, "Please provide a valid 10-digit phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  interestedService: z.string().min(1, "Please select an interested service category"),
  projectDetails: z
    .string()
    .min(10, "Please describe your project or requirements (at least 10 characters)"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to submit your enquiry",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message?: string;
    referenceId?: string;
  }>({
    status: "idle",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      interestedService: "",
      projectDetails: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionState({
          status: "success",
          message: result.message,
          referenceId: result.referenceId,
        });
        reset();
      } else {
        setSubmissionState({
          status: "error",
          message:
            result.message ||
            "Unable to submit your enquiry at this time. Please check the fields and try again.",
        });
      }
    } catch {
      setSubmissionState({
        status: "error",
        message:
          "Network connection failed while sending enquiry. Please contact us directly by phone or email.",
      });
    }
  };

  const handleReset = () => {
    setSubmissionState({ status: "idle" });
    reset();
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-10 shadow-xs" id="quote">
      {/* Success Notification */}
      {submissionState.status === "success" ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-bold font-heading text-brand-navy">
              Enquiry Received Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
              {submissionState.message}
            </p>
            {submissionState.referenceId && (
              <p className="text-xs font-mono font-semibold text-brand-navy bg-slate-100 py-1.5 px-3 rounded-lg inline-block">
                Reference ID: {submissionState.referenceId}
              </p>
            )}
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              size="md"
              onClick={handleReset}
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1.5">
            <FadeIn
              as="span"
              mode="view"
              delay={0.04}
              y={6}
              duration={0.4}
              className="inline-block text-xs font-bold text-brand-blue uppercase tracking-wider"
            >
              Direct Communication Channel
            </FadeIn>
            <RevealText
              as="h3"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Send an Enquiry / Request a Quote"
              className="text-2xl font-bold font-heading text-brand-navy"
            />
            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={12}
              className="text-xs sm:text-sm text-brand-secondary"
            >
              Fill in your organization details and project scope. Our engineering team will
              review and reply promptly.
            </FadeIn>
          </div>

          {/* Error Banner */}
          {submissionState.status === "error" && (
            <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-800 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">Submission Failed</p>
                <p>{submissionState.message}</p>
              </div>
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="text-xs font-bold uppercase tracking-wider text-brand-navy"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rajesh Kumar"
                {...register("fullName")}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-brand-text bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-brand-border"
                }`}
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-600 font-medium">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="companyName"
                className="text-xs font-bold uppercase tracking-wider text-brand-navy"
              >
                Company / Institution <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="e.g. Karnataka University / Enterprise Ltd."
                {...register("companyName")}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-brand-text bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  errors.companyName ? "border-red-400 bg-red-50/20" : "border-brand-border"
                }`}
                disabled={isSubmitting}
              />
              {errors.companyName && (
                <p className="text-[11px] text-red-600 font-medium">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wider text-brand-navy"
              >
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. name@company.com"
                {...register("email")}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-brand-text bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-brand-border"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-wider text-brand-navy"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...register("phone")}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-brand-text bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                  errors.phone ? "border-red-400 bg-red-50/20" : "border-brand-border"
                }`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-600 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Interested Service Select */}
          <div className="space-y-1.5">
            <label
              htmlFor="interestedService"
              className="text-xs font-bold uppercase tracking-wider text-brand-navy"
            >
              Interested Service Category <span className="text-red-500">*</span>
            </label>
            <select
              id="interestedService"
              {...register("interestedService")}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                errors.interestedService ? "border-red-400 bg-red-50/20" : "border-brand-border"
              }`}
              disabled={isSubmitting}
            >
              <option value="">Select a service category...</option>
              <option value="Audio Solutions">Audio Solutions & Acoustics</option>
              <option value="Auditorium Solutions">Auditorium False Ceiling & Paneling</option>
              <option value="Boardroom Solutions">Smart Boardroom & Touch Displays</option>
              <option value="Video Conferencing Solutions">Video Conferencing PTZ Systems</option>
              <option value="CCTV and Surveillance">CCTV & IP Perimeter Surveillance</option>
              <option value="Networking and Cabling">Networking & Structured Cabling</option>
              <option value="Data Centre Solutions">Modular Data Centre (MDC)</option>
              <option value="Solar and Fire Safety Solutions">Rooftop Solar & Fire Safety</option>
              <option value="Enterprise IT Consulting">Turnkey IT Consulting & SLA</option>
            </select>
            {errors.interestedService && (
              <p className="text-[11px] text-red-600 font-medium">
                {errors.interestedService.message}
              </p>
            )}
          </div>

          {/* Project Details Textarea */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDetails"
              className="text-xs font-bold uppercase tracking-wider text-brand-navy"
            >
              Project Scope & Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              placeholder="Please provide details about the project location, building size, timelines, or equipment requirements..."
              {...register("projectDetails")}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-brand-text bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                errors.projectDetails ? "border-red-400 bg-red-50/20" : "border-brand-border"
              }`}
              disabled={isSubmitting}
            />
            {errors.projectDetails && (
              <p className="text-[11px] text-red-600 font-medium">
                {errors.projectDetails.message}
              </p>
            )}
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="space-y-1 pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                {...register("privacyConsent")}
                className="mt-1 h-4 w-4 rounded border-brand-border text-brand-blue focus:ring-brand-blue"
                disabled={isSubmitting}
              />
              <span className="text-xs text-brand-secondary leading-relaxed">
                I consent to New Link Technologies Bangalore Pvt. Ltd. processing my contact
                details to respond to this enquiry in accordance with the corporate privacy policy.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="text-[11px] text-red-600 font-medium pl-7">
                {errors.privacyConsent.message}
              </p>
            )}
          </div>

          {/* Submit Action Button */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold px-8 shadow-md"
            >
              {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
            </Button>

            <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct Executive Routing</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
