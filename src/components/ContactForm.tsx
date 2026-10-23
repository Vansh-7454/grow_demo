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
    petType: "",
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
    // Strip spaces, dashes, brackets, plus
    let digits = input.replace(/[\s\-\(\)\+]/g, "");

    // Strip leading country code +91 or 91 if 12 digits
    if (digits.startsWith("91") && digits.length === 12) {
      digits = digits.slice(2);
    }
    // Strip leading 0 if 11 digits
    if (digits.startsWith("0") && digits.length === 11) {
      digits = digits.slice(1);
    }

    // Check if only digits
    if (!/^\d+$/.test(digits)) {
      return {
        normalized: digits,
        isValid: false,
        error: "Phone number must contain digits only.",
      };
    }

    // Check exact 10 digits
    if (digits.length !== 10) {
      return {
        normalized: digits,
        isValid: false,
        error: "Please enter an exact 10-digit mobile number.",
      };
    }

    // Check India mobile starting digit: 6, 7, 8, 9
    const firstDigit = digits.charAt(0);
    if (!["6", "7", "8", "9"].includes(firstDigit)) {
      return {
        normalized: digits,
        isValid: false,
        error: "Indian mobile numbers must start with 6, 7, 8, or 9.",
      };
    }

    // Reject junk numbers like all identical digits (0000000000, 9999999999) or sequential (1234567890)
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

    // Name validation: 2 to 60 characters trimmed
    const trimmedName = formData.fullName.trim();
    if (trimmedName.length < 2) {
      newErrors.fullName = "Please enter your name (at least 2 characters).";
    } else if (trimmedName.length > 60) {
      newErrors.fullName = "Name must not exceed 60 characters.";
    }

    // Phone validation
    const phoneCheck = normalizePhone(formData.phone);
    if (!phoneCheck.isValid) {
      newErrors.phone = phoneCheck.error;
    }

    // Email validation (optional, but if provided, must be valid)
    const trimmedEmail = formData.email.trim();
    if (trimmedEmail.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Pet Type validation
    if (!formData.petType) {
      newErrors.petType = "Please select whether you have a Dog or Cat.";
    }

    // Message length: up to 1000 characters
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

    // Construct direct WhatsApp message for the studio
    const msg = `*New Grooming Inquiry via Website*
Name: ${sanitizedName}
Phone: +91 ${phoneCheck.normalized}
${sanitizedEmail ? `Email: ${sanitizedEmail}\n` : ""}Pet: ${formData.petType}
Service: ${formData.service}
${sanitizedMessage ? `Notes: ${sanitizedMessage}` : ""}`;

    const waLink = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
      msg
    )}`;

    setPreparedWhatsAppUrl(waLink);

    // Open WhatsApp in a new window/tab
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-[#F2CECA] rounded-[24px] p-5 sm:p-7 md:p-9 shadow-[0_12px_36px_rgba(41,24,23,0.05)] w-full">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-extrabold text-[#291817] tracking-tight">
          Request a Grooming Appointment
        </h3>
        <p className="text-xs sm:text-sm text-[#806F6C] mt-1.5 leading-relaxed">
          Fill in your pet&apos;s details below to initiate a direct appointment inquiry on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-1.5"
          >
            Pet Parent Full Name <span className="text-[#DE1B54]">*</span>
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            required
            autoComplete="name"
            maxLength={60}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className={`w-full min-h-[46px] px-4 py-2.5 text-base sm:text-sm bg-[#FFF8F6] border rounded-xl text-[#291817] focus-visible:outline-2 ${
              errors.fullName
                ? "border-red-600 focus-visible:outline-red-600"
                : "border-[#F2CECA] focus-visible:outline-[#DE1B54]"
            }`}
            placeholder="e.g. Priya Sharma"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-1.5"
          >
            Mobile Number (10 Digits) <span className="text-[#DE1B54]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#806F6C]">
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
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={`w-full min-h-[46px] pl-13 pr-4 py-2.5 text-base sm:text-sm bg-[#FFF8F6] border rounded-xl text-[#291817] font-mono focus-visible:outline-2 ${
                errors.phone
                  ? "border-red-600 focus-visible:outline-red-600"
                  : "border-[#F2CECA] focus-visible:outline-[#DE1B54]"
              }`}
              placeholder="9812345678"
            />
          </div>
          {errors.phone ? (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.phone}
            </p>
          ) : (
            <p className="text-[11px] text-[#9E8E8C] mt-1">
              Required for appointment coordination and pickup alerts.
            </p>
          )}
        </div>

        {/* Email Address (Optional) */}
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-1.5"
          >
            Email Address (Optional)
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full min-h-[46px] px-4 py-2.5 text-base sm:text-sm bg-[#FFF8F6] border rounded-xl text-[#291817] focus-visible:outline-2 ${
              errors.email
                ? "border-red-600 focus-visible:outline-red-600"
                : "border-[#F2CECA] focus-visible:outline-[#DE1B54]"
            }`}
            placeholder="priya@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Pet Type & Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-petType`}
              className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-1.5"
            >
              Pet Type <span className="text-[#DE1B54]">*</span>
            </label>
            <select
              id={`${formId}-petType`}
              required
              value={formData.petType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  petType: e.target.value as FormState["petType"],
                })
              }
              className={`w-full min-h-[46px] px-4 py-2.5 text-base sm:text-sm bg-[#FFF8F6] border rounded-xl text-[#291817] focus-visible:outline-2 ${
                errors.petType
                  ? "border-red-600 focus-visible:outline-red-600"
                  : "border-[#F2CECA] focus-visible:outline-[#DE1B54]"
              }`}
            >
              <option value="">Select Pet...</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Both">Both Dog &amp; Cat</option>
            </select>
            {errors.petType && (
              <p className="text-xs text-red-600 mt-1 font-medium">
                {errors.petType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${formId}-service`}
              className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-1.5"
            >
              Desired Service Package
            </label>
            <select
              id={`${formId}-service`}
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full min-h-[46px] px-4 py-2.5 text-base sm:text-sm bg-[#FFF8F6] border border-[#F2CECA] rounded-xl text-[#291817] focus-visible:outline-2 focus-visible:outline-[#DE1B54]"
            >
              <option value="Basic Bath & Hygiene">Basic Bath &amp; Hygiene</option>
              <option value="Full Breed Styling & Groom">
                Full Breed Styling &amp; Groom
              </option>
              <option value="Medicated Tick & Flea Spa">
                Medicated Tick &amp; Flea Spa
              </option>
              <option value="Feline Comfort Bath">Feline Comfort Bath</option>
              <option value="Persian Cat De-Shedding & Groom">
                Persian Cat De-Shedding &amp; Groom
              </option>
              <option value="Cat Lion Cut / Summer Trim">
                Cat Lion Cut / Summer Trim
              </option>
              <option value="Custom Consultation">Other / Custom Inquiry</option>
            </select>
          </div>
        </div>

        {/* Optional Notes */}
        <div>
          <label
            htmlFor={`${formId}-notes`}
            className="block text-xs font-bold uppercase tracking-wider text-[#291817] mb-1.5"
          >
            Pet Breed, Age, or Special Care Notes (Max 1000 characters)
          </label>
          <textarea
            id={`${formId}-notes`}
            rows={3}
            maxLength={1000}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-2.5 text-base sm:text-sm bg-[#FFF8F6] border border-[#F2CECA] rounded-xl text-[#291817] focus-visible:outline-2 focus-visible:outline-[#DE1B54]"
            placeholder="e.g. 2-year-old Golden Retriever, sensitive ears, friendly temperament..."
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Transparency note as strictly mandated by Rule 16 */}
        <div className="p-3.5 bg-[#FCEAE7]/50 border border-[#F2CECA] rounded-xl text-xs text-[#806F6C] leading-relaxed">
          <p className="font-bold text-[#291817] mb-0.5">
            Privacy &amp; Transmission Transparency:
          </p>
          <p>
            This website does not transmit or store personal data in a remote database or cloud service. Submitting this form prepares your details directly into a WhatsApp chat with our Gurugram studio for immediate coordination.
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="btn-primary w-full py-3.5 text-base font-bold shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Continue to WhatsApp Booking</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {preparedWhatsAppUrl && (
          <div className="mt-4 p-3.5 bg-[#FCEAE7] border border-[#DE1B54]/40 rounded-xl text-xs text-[#291817] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
