"use client";

import { useState, useId } from "react";
import { siteContent } from "@/data/siteContent";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  petType: "Dog" | "Cat" | "Both" | "";
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  petType?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const formId = useId();
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    petType: "Dog",
    service: "Basic Bath & Hygiene",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(
    null
  );

  function normalizePhone(input: string): {
    normalized: string;
    isValid: boolean;
    error?: string;
  } {
    let digits = input.replace(/[\s\-\(\)\+]/g, "");

    if (digits.startsWith("91") && digits.length === 12) {
      digits = digits.slice(2);
    }
    if (digits.startsWith("0") && digits.length === 11) {
      digits = digits.slice(1);
    }

    if (!/^\d+$/.test(digits)) {
      return {
        normalized: digits,
        isValid: false,
        error: "Phone number must contain digits only.",
      };
    }

    if (digits.length !== 10) {
      return {
        normalized: digits,
        isValid: false,
        error: "Please enter an exact 10-digit mobile number.",
      };
    }

    const firstDigit = digits.charAt(0);
    if (!["6", "7", "8", "9"].includes(firstDigit)) {
      return {
        normalized: digits,
        isValid: false,
        error: "Indian mobile numbers must start with 6, 7, 8, or 9.",
      };
    }

    const isAllSame = new Set(digits.split("")).size === 1;
    const isSequential = digits === "1234567890" || digits === "0123456789";

    if (isAllSame || isSequential) {
      return {
        normalized: digits,
        isValid: false,
        error: "Please enter a valid mobile number.",
      };
    }

    return { normalized: digits, isValid: true };
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};

    const trimmedName = formData.fullName.trim();
    if (trimmedName.length < 2) {
      newErrors.fullName = "Please enter your name (at least 2 characters).";
    } else if (trimmedName.length > 60) {
      newErrors.fullName = "Name must not exceed 60 characters.";
    }

    const phoneCheck = normalizePhone(formData.phone);
    if (!phoneCheck.isValid) {
      newErrors.phone = phoneCheck.error;
    }

    const trimmedEmail = formData.email.trim();
    if (trimmedEmail.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.petType) {
      newErrors.petType = "Please select whether you have a Dog or Cat.";
    }

    if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must not exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const phoneCheck = normalizePhone(formData.phone);
    const sanitizedName = formData.fullName.trim();
    const sanitizedEmail = formData.email.trim();
    const sanitizedMessage = formData.message.trim();

    const msg = `*New Grooming Appointment Request*
Name: ${sanitizedName}
WhatsApp: +91 ${phoneCheck.normalized}
${sanitizedEmail ? `Email: ${sanitizedEmail}\n` : ""}Pet: ${formData.petType}
Service: ${formData.service}
${sanitizedMessage ? `Notes: ${sanitizedMessage}` : ""}`;

    const waLink = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
      msg
    )}`;

    setPreparedWhatsAppUrl(waLink);
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-[#F2CECA] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_12px_36px_rgba(41,24,23,0.05)] w-full">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-[#F2CECA]/60">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2">
          <span>✦</span>
          <span>Fast WhatsApp Confirmation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291817] tracking-tight">
          Request a Grooming Appointment
        </h2>
        <p className="text-sm text-[#806F6C] mt-2 leading-relaxed">
          Share your pet&apos;s details below. Our Gurugram concierge will confirm your 1-on-1 slot and pricing on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Interactive Pet Selection Pills */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-2.5">
            Who are we pampering? <span className="text-[#DE1B54]">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { type: "Dog", icon: "🐶", label: "Dog", sub: "Canine suite" },
              { type: "Cat", icon: "🐱", label: "Cat", sub: "Quiet suite" },
              { type: "Both", icon: "🐾", label: "Both", sub: "Dog & Cat" },
            ].map((p) => {
              const isSelected = formData.petType === p.type;
              return (
                <button
                  key={p.type}
                  type="button"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      petType: p.type as FormState["petType"],
                    });
                    if (errors.petType)
                      setErrors({ ...errors, petType: undefined });
                  }}
                  className={`py-3.5 px-3 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    isSelected
                      ? "bg-[#FCEAE7] border-2 border-[#DE1B54] text-[#291817] shadow-sm"
                      : "bg-[#FFF8F6] border-[#F2CECA] text-[#806F6C] hover:border-[#DE1B54]/40 hover:bg-white"
                  }`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-xs font-extrabold text-[#291817]">
                    {p.label}
                  </span>
                  <span className="text-[10px] text-[#806F6C]">{p.sub}</span>
                </button>
              );
            })}
          </div>
          {errors.petType && (
            <p className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.petType}
            </p>
          )}
        </div>

        {/* Name & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor={`${formId}-name`}
              className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-2"
            >
              Your Name <span className="text-[#DE1B54]">*</span>
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              required
              autoComplete="name"
              maxLength={60}
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName)
                  setErrors({ ...errors, fullName: undefined });
              }}
              className={`w-full min-h-[48px] px-4 py-3 text-sm bg-white border rounded-2xl text-[#291817] placeholder:text-[#9E8E8C] transition-all focus:outline-none focus:ring-2 focus:ring-[#DE1B54]/20 ${
                errors.fullName
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#F2CECA] focus:border-[#DE1B54]"
              }`}
              placeholder="e.g. Priya Sharma"
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1.5 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-2"
            >
              WhatsApp Mobile <span className="text-[#DE1B54]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#806F6C] bg-[#FFF8F6] px-2 py-1 rounded-lg border border-[#F2CECA]">
                +91
              </span>
              <input
                id={`${formId}-phone`}
                type="tel"
                required
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={14}
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full min-h-[48px] pl-16 pr-4 py-3 text-sm bg-white border rounded-2xl text-[#291817] font-mono placeholder:text-[#9E8E8C] transition-all focus:outline-none focus:ring-2 focus:ring-[#DE1B54]/20 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#F2CECA] focus:border-[#DE1B54]"
                }`}
                placeholder="98123 45678"
              />
            </div>
            {errors.phone ? (
              <p className="text-xs text-red-600 mt-1.5 font-medium">
                {errors.phone}
              </p>
            ) : (
              <p className="text-[11px] text-[#806F6C] mt-1.5">
                We will send pickup alerts and photo updates here.
              </p>
            )}
          </div>
        </div>

        {/* Email & Desired Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Address (Optional) */}
          <div>
            <label
              htmlFor={`${formId}-email`}
              className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-2"
            >
              Email Address <span className="text-[#806F6C] font-normal normal-case">(Optional)</span>
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={`w-full min-h-[48px] px-4 py-3 text-sm bg-white border rounded-2xl text-[#291817] placeholder:text-[#9E8E8C] transition-all focus:outline-none focus:ring-2 focus:ring-[#DE1B54]/20 ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#F2CECA] focus:border-[#DE1B54]"
              }`}
              placeholder="priya@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1.5 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Desired Service Package */}
          <div>
            <label
              htmlFor={`${formId}-service`}
              className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-2"
            >
              Desired Service
            </label>
            <select
              id={`${formId}-service`}
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full min-h-[48px] px-4 py-3 text-sm bg-white border border-[#F2CECA] rounded-2xl text-[#291817] focus:outline-none focus:border-[#DE1B54] focus:ring-2 focus:ring-[#DE1B54]/20 transition-all cursor-pointer"
            >
              <option value="Basic Bath & Hygiene">Basic Bath &amp; Hygiene (From ₹999)</option>
              <option value="Full Breed Styling & Groom">
                Full Breed Styling &amp; Groom (From ₹1,599)
              </option>
              <option value="Medicated Tick & Flea Spa">
                Medicated Tick &amp; Flea Spa (From ₹1,899)
              </option>
              <option value="Feline Comfort Bath">Feline Comfort Bath (From ₹1,499)</option>
              <option value="Persian Cat De-Shedding & Groom">
                Persian Cat De-Matting &amp; Groom (From ₹2,199)
              </option>
              <option value="Cat Lion Cut / Summer Trim">
                Cat Lion Cut / Summer Trim (From ₹2,699)
              </option>
              <option value="Custom Consultation">Other / Custom Inquiry</option>
            </select>
          </div>
        </div>

        {/* Optional Notes */}
        <div>
          <label
            htmlFor={`${formId}-notes`}
            className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-2"
          >
            Pet Breed, Age, or Care Notes <span className="text-[#806F6C] font-normal normal-case">(Optional)</span>
          </label>
          <textarea
            id={`${formId}-notes`}
            rows={3}
            maxLength={1000}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 text-sm bg-white border border-[#F2CECA] rounded-2xl text-[#291817] placeholder:text-[#9E8E8C] focus:outline-none focus:border-[#DE1B54] focus:ring-2 focus:ring-[#DE1B54]/20 transition-all resize-y"
            placeholder="e.g. 2-year-old Golden Retriever, sensitive ears, friendly temperament, needs gentle blow dry..."
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1.5 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Transparency & Security Note */}
        <div className="p-4 bg-[#FFF8F6] border border-[#F2CECA] rounded-2xl text-xs text-[#806F6C] leading-relaxed flex items-start gap-3">
          <span className="text-lg text-[#DE1B54] shrink-0" aria-hidden="true">
            🔒
          </span>
          <div>
            <p className="font-bold text-[#291817] mb-0.5">
              Instant 1-on-1 Studio Coordination
            </p>
            <p>
              Submitting opens a direct WhatsApp chat with our Gurugram studio concierge. Your details are never stored on third-party servers.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="btn-primary w-full py-4 text-base font-bold shadow-md cursor-pointer flex items-center justify-center gap-2.5"
          >
            <span>Continue on WhatsApp</span>
            <span aria-hidden="true" className="text-lg">→</span>
          </button>
        </div>

        {preparedWhatsAppUrl && (
          <div className="p-3.5 bg-[#FCEAE7] border border-[#DE1B54]/40 rounded-xl text-xs text-[#291817] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>
              If WhatsApp did not automatically open, tap the link:
            </span>
            <a
              href={preparedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#DE1B54] underline shrink-0 inline-flex items-center gap-1"
            >
              <span>Open WhatsApp Now</span>
              <span>→</span>
            </a>
          </div>
        )}
      </form>
    </div>
  );
}

