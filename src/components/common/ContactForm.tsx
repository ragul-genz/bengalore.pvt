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
  Building2,
} from "lucide-react";
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
    <div
      className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl text-[#0F172A] relative overflow-hidden"
      id="quote"
    >
      {/* Success Notification */}
      {submissionState.status === "success" ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in duration-300 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-bold font-heading text-[#0F172A]">
              Enquiry Received Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {submissionState.message}
            </p>
            {submissionState.referenceId && (
              <p className="text-xs font-mono font-semibold text-[#0B1F3A] bg-slate-100 border border-slate-200 py-1.5 px-3.5 rounded-full inline-block">
                Reference ID: {submissionState.referenceId}
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1F3A] hover:bg-[#142B4A] text-white font-semibold text-sm transition-all cursor-pointer shadow-md"
            >
              <RotateCcw className="w-4 h-4 text-sky-400" />
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/15 text-[#0B1F3A] text-[11px] font-mono uppercase tracking-wider">
              <Building2 className="w-3 h-3 text-[#2563EB]" />
              <span>Direct Communication Channel</span>
            </div>
            <RevealText
              as="h3"
              by="word"
              mode="view"
              delay={0.08}
              stagger={0.045}
              text="Send an Enquiry / Request a Turnkey Quote"
              className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] tracking-tight"
            />
            <FadeIn
              as="p"
              mode="view"
              delay={0.22}
              y={12}
              className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed"
            >
              Fill in your organization details and project scope. Our engineering team under Director
              M.G. Girish will review technical specifications and reply promptly.
            </FadeIn>
          </div>

          {/* Error Banner */}
          {submissionState.status === "error" && (
            <div className="p-4 rounded-2xl border border-amber-300 bg-amber-50 text-amber-900 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-amber-900">Submission Notice</p>
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
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]"
              >
                Full Name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rajesh Kumar"
                {...register("fullName")}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all ${
                  errors.fullName ? "border-amber-400 bg-amber-50/50" : "border-slate-200"
                }`}
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <p className="text-[11px] text-amber-700 font-mono">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="companyName"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]"
              >
                Company / Institution <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="e.g. Karnataka University / PSU Enterprise"
                {...register("companyName")}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all ${
                  errors.companyName ? "border-amber-400 bg-amber-50/50" : "border-slate-200"
                }`}
                disabled={isSubmitting}
              />
              {errors.companyName && (
                <p className="text-[11px] text-amber-700 font-mono">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]"
              >
                Business Email <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. name@company.com"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all ${
                  errors.email ? "border-amber-400 bg-amber-50/50" : "border-slate-200"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-[11px] text-amber-700 font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]"
              >
                Phone Number <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...register("phone")}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all ${
                  errors.phone ? "border-amber-400 bg-amber-50/50" : "border-slate-200"
                }`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-[11px] text-amber-700 font-mono">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Interested Service Select */}
          <div className="space-y-1.5">
            <label
              htmlFor="interestedService"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]"
            >
              Interested Service Category <span className="text-[#2563EB]">*</span>
            </label>
            <select
              id="interestedService"
              {...register("interestedService")}
              className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#0F172A] bg-slate-50 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all ${
                errors.interestedService ? "border-amber-400 bg-amber-50/50" : "border-slate-200"
              }`}
              disabled={isSubmitting}
            >
              <option value="" className="text-slate-400">Select a service category...</option>
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
              <p className="text-[11px] text-amber-700 font-mono">
                {errors.interestedService.message}
              </p>
            )}
          </div>

          {/* Project Details Textarea */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDetails"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]"
            >
              Project Scope & Requirements <span className="text-[#2563EB]">*</span>
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              placeholder="Please provide details about project location, campus size, delivery timelines, or technical specifications..."
              {...register("projectDetails")}
              className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all ${
                errors.projectDetails ? "border-amber-400 bg-amber-50/50" : "border-slate-200"
              }`}
              disabled={isSubmitting}
            />
            {errors.projectDetails && (
              <p className="text-[11px] text-amber-700 font-mono">
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
                className="mt-1 h-4 w-4 rounded border-slate-300 bg-white text-[#2563EB] focus:ring-[#2563EB] accent-[#2563EB]"
                disabled={isSubmitting}
              />
              <span className="text-xs text-slate-600 leading-relaxed font-normal">
                I consent to New Link Technologies Bangalore Pvt. Ltd. processing my contact
                details to respond to this turnkey tender or engineering enquiry.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="text-[11px] text-amber-700 font-mono pl-7">
                {errors.privacyConsent.message}
              </p>
            )}
          </div>

          {/* Submit Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#2563EB]/25 transition-all cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? "Submitting Enquiry..." : "Submit Turnkey Enquiry"}</span>
              <Send className="w-4 h-4" />
            </button>

            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>DIRECT EXECUTIVE ROUTING</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
