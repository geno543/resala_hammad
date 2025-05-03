import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";
import { div } from "framer-motion/client";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState();
  const [message, setMessage] = useState();
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY ;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Resalla-Abu-Hammad",
      subject: "New Contact Message from website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      console.log(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  const [newsletter, setNewsletter] = useState({
    email: "",
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter:", newsletter);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "الهاتف",
      content: "+20 106 530 9906",
      href: "tel:+201065309906",
      content: "+20 115 909 2590",
      href: "tel:+201159092590",
    },
    {
      icon: <FaEnvelope />,
      title: "البريد الإلكتروني",
      content: "info@resala-abuhammad.org",
      href: "mailto:info@resala-abuhammad.org",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "العنوان",
      content: "أبو حماد (بجوار المزلقان الجديد)، الشرقية، مصر",
    },
    {
      icon: <FaClock />,
      title: "ساعات العمل",
      content: "الأحد-الخميس: ٩:٠٠ ص - ٥:٠٠ م",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_200px,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_800px,rgba(255,255,255,0.1),transparent)]" />
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.span
            className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-white"
            {...fadeInUp}
          >
            تواصل معنا
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            اتصل بنا
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            هل لديك أسئلة؟ نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت
            ممكن.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                معلومات الاتصال
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`group p-3 md:p-4 rounded-xl transition-all duration-300 ${
                      info.href ? "hover:bg-gray-50 cursor-pointer" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="text-xl md:text-2xl text-[var(--gradient-start)] ml-3 md:ml-4 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-sm md:text-base">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                موقعنا
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="موقع رسالة أبوحماد"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d31.123456!3d30.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzM0LjQiTiAzMcKwMDcnMzQuNCJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Forms */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Form */}
            <motion.div
              className=" bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                أرسل لنا رسالة
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative space-y-4 md:space-y-6"
              >
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    الاسم
                  </label>
                  <input
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                    name="name"
                    type="text"
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    رقم الهاتف
                  </label>
                  <input
                    {...register("number", { required: true })}
                    type="tel"
                    name="number"
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    الموضوع
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    name="subject"
                    type="text"
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    {...register("message", { required: true })}
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 h-24 md:h-32"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  إرسال الرسالة
                  <FaArrowLeft className="mr-2 inline-block transform group-hover:-translate-x-1 transition-transform" />
                </motion.button>
                {isSuccess && (
                  <div className="absolute top-0 w-full h-full bg-white bg-opacity-45 mt-3 text-2xl flex justify-center items-center text-center text-green-500">
                   تم ارسال الرسالة بنجاح
                  </div>
                )}
                </form>
              
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                اشترك في النشرة الإخبارية ليصلك كل جديد
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                ابق على اطلاع بأحدث أخبارنا وأنشطتنا
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletter.email}
                    onChange={(e) => setNewsletter({ email: e.target.value })}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-secondary w-full flex items-center justify-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane className="ml-2 transform group-hover:-translate-x-1 transition-transform" />
                  اشترك
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
