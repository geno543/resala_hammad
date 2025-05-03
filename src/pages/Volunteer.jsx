import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaBook,
  FaHandHoldingMedical,
  FaUsers,
  FaCheck,
  FaArrowLeft,
  FaQuoteRight,
} from "react-icons/fa";

const Volunteer = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [status, setStatus] = useState(null);  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    id: "",
    address: "",
    experience: "",
  });

  const handleCheckboxChange = (activity) => {
    setSelectedActivities((prevSelected) =>
      prevSelected.includes(activity)
        ? prevSelected.filter((item) => item !== activity)
        : [...prevSelected, activity]
    );
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        id: formData.id,
        address: formData.address,
        experience: formData.experience,
        activities: selectedActivities.join(", "),
      },
    };

    try {
      const res = await fetch(process.env.REACT_APP_SHEETDB_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          address: "",
          experience: "",
          id: "",
        });
        setSelectedActivities([]);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   age: "",
  //   address: "",
  //   ID: "",
  //   GraduationDate: "",
  // });

  const activities = [
    {
      id: "food",
      icon: <FaHeart />,
      title: "توزيع الطعام",
      description: "المساعدة في توزيع حزم الطعام للعائلات المحتاجة",
      impact: "أكثر من 1000 وجبة شهريًا",
      value: "",
    },
    {
      id: "education",
      icon: <FaBook />,
      title: "دعم التعليم",
      description: "تقديم التدريس الخصوصي والمساعدة التعليمية",
      impact: "دعم أكثر من 200 طالب",
    },
    {
      id: "medical",
      icon: <FaHandHoldingMedical />,
      title: "المساعدة الطبية",
      description: "الدعم في المخيمات الطبية ومبادرات الصحة",
      impact: "خدمة أكثر من 500 مريض",
    },
    {
      id: "community",
      icon: <FaUsers />,
      title: "فعاليات المجتمع",
      description: "المساعدة في تنظيم وإدارة فعاليات المجتمع",
      impact: "أكثر من 50 فعالية سنويًا",
    },
  ];

  const testimonials = [
    {
      name: "أحمد حسن",
      role: "متطوع توزيع الطعام",
      quote: "التطوع في رسالة كان من أكثر التجارب المجزية في حياتي.",
    },
    {
      name: "فاطمة علي",
      role: "متطوعة برنامج التعليم",
      quote: "رؤية التأثير الذي نحدثه في حياة الطلاب مرضية للغاية.",
    },
    {
      name: "عمر محمد",
      role: "متطوع المخيم الطبي",
      quote: "روح الفريق والتفاني في مساعدة الآخرين ملهمة حقًا.",
    },
  ];

  const toggleActivity = (activityId) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {status === "success" && (
         <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 30 }}
         transition={{ duration: 0.4 }}
         className="z-50 fixed top-28 left-10 mt-6 p-4 rounded-xl bg-green-100 border border-green-300 text-green-800 text-center font-semibold"
       >
         ✅ تم إرسال النموذج بنجاح!
       </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="z-50 fixed top-28 left-10 mt-6 p-4 rounded-xl bg-red-100 border border-red-300 text-red-800 text-center font-semibold"
          >
            ❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.
          </motion.div>
        )}
      </AnimatePresence>
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
            انضم إلى فريقنا
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            كن متطوعًا
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            انضم إلى فريقنا المتفاني من المتطوعين وساعد في إحداث تأثير إيجابي في
            مجتمعنا
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Activities Selection */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent text-right">
              اختر الأنشطة التي تهتم بها
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {activities.map((activity) => (
                <motion.button
                  key={activity.id}
                  onChange={() => handleCheckboxChange(activity)}
                  className={`p-4 md:p-6 rounded-xl border-2 text-right group transition-all duration-300 ${
                    selectedActivities.includes(activity.id)
                      ? "border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleActivity(activity.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <AnimatePresence>
                      {selectedActivities.includes(activity.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="bg-[var(--gradient-start)] text-white p-2 rounded-full"
                        >
                          <FaCheck />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="flex-grow mx-3">
                      <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">
                        {activity.description}
                      </p>
                      <p className="text-xs md:text-sm text-[var(--gradient-start)]">
                        {activity.impact}
                      </p>
                    </div>
                    <div
                      className={`text-2xl md:text-3xl ml-3 md:ml-4 transition-all duration-300 ${
                        selectedActivities.includes(activity.id)
                          ? "text-[var(--gradient-start)]"
                          : "text-gray-400"
                      } group-hover:scale-110`}
                    >
                      {activity.icon}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              شهادات المتطوعين
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-4 md:p-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <FaQuoteRight className="absolute top-4 left-4 text-xl md:text-2xl text-[var(--gradient-start)]/10" />
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base text-right">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center justify-end">
                    <div className="mr-3">
                      <h4 className="font-semibold text-right">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 text-right">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent text-right">
              المعلومات الشخصية
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { name: 'name', label: 'الاسم الكامل', type: 'text' },
                  { name: 'email', label: 'البريد الإلكتروني', type: 'email' },
                  { name: 'phone', label: 'رقم الهاتف', type: 'tel' },
                  { name: 'age', label: 'العمر', type: 'number' }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                  العنوان
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                  خبرة التطوع السابقة (اختياري)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 h-24 md:h-32 text-right"
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg font-semibold flex items-center justify-center group ${
                  selectedActivities.length === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "btn-primary"
                }`}
                whileHover={
                  selectedActivities.length > 0 ? { scale: 1.02 } : {}
                }
                whileTap={selectedActivities.length > 0 ? { scale: 0.98 } : {}}
                disabled={selectedActivities.length === 0}
              >
                تقديم الطلب
                <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
