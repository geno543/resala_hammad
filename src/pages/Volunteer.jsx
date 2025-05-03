import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart,
  FaBook,
  FaHandHoldingMedical,
  FaUsers,
  FaCheck,
  FaArrowLeft,
  FaStar,
  FaQuoteRight,
  FaGraduationCap,
  FaCalendarAlt,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserAlt,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const Volunteer = () => {
  // Form steps
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    ID: '',
    education: '',
    availability: [],
    skills: '',
    experience: '',
    emergencyContact: '',
    howHeard: '',
    preferredCommunication: 'email',
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activities = [
    {
      id: 'food',
      icon: <FaHeart />,
      title: 'توزيع الطعام',
      description: 'المساعدة في توزيع حزم الطعام للعائلات المحتاجة',
      impact: 'أكثر من 1000 وجبة شهريًا',
    },
    {
      id: 'education',
      icon: <FaBook />,
      title: 'دعم التعليم',
      description: 'تقديم التدريس الخصوصي والمساعدة التعليمية',
      impact: 'دعم أكثر من 200 طالب',
    },
    {
      id: 'medical',
      icon: <FaHandHoldingMedical />,
      title: 'المساعدة الطبية',
      description: 'الدعم في المخيمات الطبية ومبادرات الصحة',
      impact: 'خدمة أكثر من 500 مريض',
    },
    {
      id: 'community',
      icon: <FaUsers />,
      title: 'فعاليات المجتمع',
      description: 'المساعدة في تنظيم وإدارة فعاليات المجتمع',
      impact: 'أكثر من 50 فعالية سنويًا',
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
    setSelectedActivities(prev =>
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  // Validation functions
  const validateStep = (step) => {
    const errors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) errors.name = "الاسم مطلوب";
      if (!formData.ID.trim()) errors.ID = "الرقم القومي مطلوب";
      if (!formData.phone.trim()) errors.phone = "رقم الهاتف مطلوب";
      if (formData.phone.trim() && !/^\d{11}$/.test(formData.phone.trim()))
        errors.phone = "يجب أن يتكون رقم الهاتف من 11 رقم";
      if (!formData.age.trim()) errors.age = "العمر مطلوب";
      if (formData.age && (parseInt(formData.age) < 18 || parseInt(formData.age) > 70))
        errors.age = "يجب أن يكون العمر بين 18 و 70";
    } else if (step === 2) {
      if (!formData.address.trim()) errors.address = "العنوان مطلوب";
      if (!formData.email.trim()) errors.email = "البريد الإلكتروني مطلوب";
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
        errors.email = "البريد الإلكتروني غير صالح";
      if (!formData.education) errors.education = "المستوى التعليمي مطلوب";
      if (formData.availability.length === 0) errors.availability = "يرجى اختيار وقت متاح واحد على الأقل";
    } else if (step === 3) {
      if (selectedActivities.length === 0) errors.activities = "يرجى اختيار نشاط واحد على الأقل";
    }
    
    return errors;
  };
  
  const nextStep = () => {
    const errors = validateStep(currentStep);
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    
    if (name === 'availability') {
      setFormData(prev => ({
        ...prev,
        availability: checked
          ? [...prev.availability, value]
          : prev.availability.filter(item => item !== value)
      }));
      
      // Clear error when user selects
      if (formErrors.availability) {
        setFormErrors(prev => ({
          ...prev,
          availability: undefined
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateStep(currentStep);
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log({ ...formData, selectedActivities });
        setIsSubmitting(false);
        setFormSubmitted(true);
      }, 1500);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
            انضم إلى فريقنا المتفاني من المتطوعين وساعد في إحداث تأثير إيجابي في مجتمعنا
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">

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
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base text-right">{testimonial.quote}</p>
                  <div className="flex items-center justify-end">
                    <div className="mr-3">
                      <h4 className="font-semibold text-right">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500 text-right">{testimonial.role}</p>
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
              استمارة التطوع
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                    الاسم <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUserAlt className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 pr-10 rounded-xl border-2 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-200 focus:border-[var(--gradient-start)]'
                      } focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right`}
                      required
                      placeholder="الاسم بالكامل"
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1 text-right">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                    الرقم القومي <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaIdCard className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="ID"
                      value={formData.ID}
                      onChange={handleInputChange}
                      className={`w-full p-3 pr-10 rounded-xl border-2 ${
                        formErrors.ID ? 'border-red-500' : 'border-gray-200 focus:border-[var(--gradient-start)]'
                      } focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right`}
                      required
                      placeholder="الرقم القومي"
                    />
                  </div>
                  {formErrors.ID && (
                    <p className="text-red-500 text-sm mt-1 text-right">{formErrors.ID}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 pr-10 rounded-xl border-2 ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-200 focus:border-[var(--gradient-start)]'
                      } focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right`}
                      required
                      placeholder="رقم الهاتف"
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1 text-right">{formErrors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                    السن <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="18"
                    max="70"
                    className={`w-full p-3 rounded-xl border-2 ${
                      formErrors.age ? 'border-red-500' : 'border-gray-200 focus:border-[var(--gradient-start)]'
                    } focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right`}
                    required
                    placeholder="السن"
                  />
                  {formErrors.age && (
                    <p className="text-red-500 text-sm mt-1 text-right">{formErrors.age}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                  العنوان <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute top-3 right-3 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full p-3 pr-10 rounded-xl border-2 ${
                      formErrors.address ? 'border-red-500' : 'border-gray-200 focus:border-[var(--gradient-start)]'
                    } focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right h-24`}
                    required
                    placeholder="العنوان بالتفصيل"
                  />
                </div>
                {formErrors.address && (
                  <p className="text-red-500 text-sm mt-1 text-right">{formErrors.address}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right text-sm md:text-base">
                  الأنشطة <span className="text-red-500">*</span>
                </label>
                <select
                  name="activity"
                  className={`w-full p-3 rounded-xl border-2 ${
                    formErrors.activities ? 'border-red-500' : 'border-gray-200 focus:border-[var(--gradient-start)]'
                  } focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 text-right`}
                  required
                  onChange={(e) => {
                    if (e.target.value) {
                      setSelectedActivities([e.target.value]);
                    } else {
                      setSelectedActivities([]);
                    }
                  }}
                  value={selectedActivities[0] || ""}
                >
                  <option value="">اختر النشاط</option>
                  <option value="food">فريق الإطعام</option>
                  <option value="education">فريق إنقاذ حياة</option>
                  <option value="medical">فريق الاستكشافات</option>
                  <option value="community">فريق الدعايا</option>
                  <option value="">فريق اللجنة الطبية</option>
                  <option value="">فريق مساعدة الأسر الفقيرة</option>
                </select>
                {formErrors.activities && (
                  <p className="text-red-500 text-sm mt-1 text-right">{formErrors.activities}</p>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <motion.button
                  type="submit"
                  className={`py-3 md:py-4 px-8 md:px-12 rounded-xl text-base md:text-lg font-semibold flex items-center justify-center group ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري التقديم...
                    </span>
                  ) : (
                    <>
                      تقديم طلب التطوع
                      <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
