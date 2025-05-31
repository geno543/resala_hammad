import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCreditCard,
  FaMobileAlt,
  FaHandHoldingHeart,
  FaRegClock,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowLeft,
  FaHome,
  FaWallet,
  FaMapMarkerAlt,
  FaUserTie,
  FaMoneyBillWave,
  FaInfoCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaExclamationTriangle,
  FaSpinner
} from 'react-icons/fa';

const Donate = () => {
  // Form state
  const [donationMethod, setDonationMethod] = useState(null); // 'representative' or 'other-methods'
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  
  // Form validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const predefinedAmounts = ['100', '200', '500', '1000'];

  // Validation functions
  const validateName = (value) => {
    if (!value.trim()) return 'الاسم مطلوب';
    if (value.trim().length < 3) return 'يجب أن يكون الاسم 3 أحرف على الأقل';
    return '';
  };

  const validatePhone = (value) => {
    if (!value.trim()) return 'رقم الهاتف مطلوب';
    if (!/^01[0125][0-9]{8}$/.test(value.trim())) return 'رقم الهاتف غير صالح';
    return '';
  };

  const validateAmount = (value) => {
    if (!value) return 'المبلغ مطلوب';
    if (isNaN(value) || parseInt(value) <= 0) return 'يجب أن يكون المبلغ رقماً موجباً';
    return '';
  };

  const validateAddress = (value) => {
    if (!value.trim()) return 'العنوان مطلوب';
    if (value.trim().length < 10) return 'يجب أن يكون العنوان مفصلاً';
    return '';
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (donationMethod === 'representative') {
      newErrors.name = validateName(name);
      newErrors.phone = validatePhone(phone);
      newErrors.amount = validateAmount(amount);
      newErrors.address = validateAddress(address);
    }
    
    return newErrors;
  };

  // Handle field blur
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  // Handle input change with validation
  const handleInputChange = (field, value) => {
    let validationFn;
    
    switch (field) {
      case 'name':
        setName(value);
        validationFn = validateName;
        break;
      case 'phone':
        setPhone(value);
        validationFn = validatePhone;
        break;
      case 'amount':
        setAmount(value);
        validationFn = validateAmount;
        break;
      case 'address':
        setAddress(value);
        validationFn = validateAddress;
        break;
      case 'preferredTime':
        setPreferredTime(value);
        break;
      default:
        break;
    }
    
    if (validationFn && touched[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: validationFn(value)
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);
    setTouched({
      name: true,
      phone: true,
      amount: true,
      address: true
    });
    
    // Check if there are any errors
    const hasErrors = Object.values(formErrors).some(error => error);
    
    if (!hasErrors && donationMethod === 'representative') {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log({ donationMethod, amount, name, phone, address, preferredTime });
        
        // Show success
        setFormSubmitted(true);
        
        // Reset form
        setAmount('');
        setName('');
        setPhone('');
        setAddress('');
        setPreferredTime('');
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const impactMetrics = [
    { icon: <FaUsers />, number: '+400', label: 'عائلة تم دعمها' },
    { icon: <FaHandHoldingHeart />, number: '+10', label: 'مشروع نشط' },
    { icon: <FaHome />, number: '+30', label: 'قرية مستفيدة من تبرعك' }
  ];

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
            كن ذا أثر
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            أحدث فرقًا اليوم
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            كرمك يساعدنا على مواصلة مهمتنا في خدمة المحتاجين في مجتمعنا
          </motion.p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl text-[var(--gradient-start)] mb-3 md:mb-4 w-fit mx-auto">{metric.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Method Selection */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              اختر طريقة التبرع
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <motion.button
                className={`p-6 md:p-8 rounded-xl border-2 flex flex-col items-center group ${
                  donationMethod === 'representative'
                    ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDonationMethod('representative')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaUserTie className={`text-4xl md:text-5xl mb-3 md:mb-4 ${
                  donationMethod === 'representative' ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                } group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">مندوب</h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  سيأتي مندوبنا لاستلام تبرعك من المنزل
                </p>
              </motion.button>

              <motion.button
                className={`p-6 md:p-8 rounded-xl border-2 flex flex-col items-center group ${
                  donationMethod === 'other-methods'
                    ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDonationMethod('other-methods')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaInfoCircle className={`text-4xl md:text-5xl mb-3 md:mb-4 ${
                  donationMethod === 'other-methods' ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                } group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">طرق أخرى</h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  معلومات عن طرق التبرع الأخرى
                </p>
              </motion.button>
            </div>

            {/* Representative Form */}
            <AnimatePresence>
              {donationMethod === 'representative' && (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                      اختر المبلغ (جنيه مصري)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
                      {predefinedAmounts.map((preset) => (
                        <motion.button
                          key={preset}
                          type="button"
                          className={`py-3 md:py-4 rounded-xl border-2 group ${
                            amount === preset
                              ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setAmount(preset)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className={`text-base md:text-lg font-bold ${
                            amount === preset ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent' : 'text-gray-700'
                          }`}>
                            {preset} جنيه
                          </span>
                        </motion.button>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="أدخل مبلغ مخصص"
                          className={`w-full p-3 md:p-4 pr-10 rounded-xl border-2 ${
                            errors.amount && touched.amount
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[var(--gradient-start)] focus:ring-[var(--gradient-start)]/20'
                          } transition-all duration-300`}
                          value={amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          onBlur={() => handleBlur('amount')}
                        />
                      </div>
                      {errors.amount && touched.amount && (
                        <div className="mt-1 text-red-500 text-sm flex items-start">
                          <FaExclamationTriangle className="mr-1 mt-0.5 flex-shrink-0" />
                          <span>{errors.amount}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <label className="block text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                      معلومات التواصل
                    </label>
                    <div className="space-y-3 md:space-y-4">
                      <div className="relative">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="الاسم"
                            className={`w-full p-3 md:p-4 pr-10 rounded-xl border-2 ${
                              errors.name && touched.name
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                : 'border-gray-200 focus:border-[var(--gradient-start)] focus:ring-[var(--gradient-start)]/20'
                            } transition-all duration-300`}
                            value={name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            required
                          />
                        </div>
                        {errors.name && touched.name && (
                          <div className="mt-1 text-red-500 text-sm flex items-start">
                            <FaExclamationTriangle className="mr-1 mt-0.5 flex-shrink-0" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="relative">
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="رقم الهاتف"
                            className={`w-full p-3 md:p-4 pr-10 rounded-xl border-2 ${
                              errors.phone && touched.phone
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                : 'border-gray-200 focus:border-[var(--gradient-start)] focus:ring-[var(--gradient-start)]/20'
                            } transition-all duration-300`}
                            value={phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            required
                          />
                        </div>
                        {errors.phone && touched.phone && (
                          <div className="mt-1 text-red-500 text-sm flex items-start">
                            <FaExclamationTriangle className="mr-1 mt-0.5 flex-shrink-0" />
                            <span>{errors.phone}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="relative">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="العنوان"
                            className={`w-full p-3 md:p-4 pr-10 rounded-xl border-2 ${
                              errors.address && touched.address
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                : 'border-gray-200 focus:border-[var(--gradient-start)] focus:ring-[var(--gradient-start)]/20'
                            } transition-all duration-300`}
                            value={address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            onBlur={() => handleBlur('address')}
                            required
                          />
                        </div>
                        {errors.address && touched.address && (
                          <div className="mt-1 text-red-500 text-sm flex items-start">
                            <FaExclamationTriangle className="mr-1 mt-0.5 flex-shrink-0" />
                            <span>{errors.address}</span>
                          </div>
                        )}
                      </div>
                      <div className="relative">
                        <div className="relative">
                          <textarea
                            placeholder="رسالة (اختياري)"
                            className="w-full p-3 md:p-4 pr-10 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 h-24"
                            value={preferredTime}
                            onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className={`w-full py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg font-semibold flex items-center justify-center group ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-wait'
                        : (!amount || !name || !phone || !address || Object.values(errors).some(error => error))
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'btn-primary'
                    }`}
                    whileHover={!isSubmitting && amount && name && phone && address && !Object.values(errors).some(error => error) ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting && amount && name && phone && address && !Object.values(errors).some(error => error) ? { scale: 0.98 } : {}}
                    disabled={isSubmitting || !amount || !name || !phone || !address || Object.values(errors).some(error => error)}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin ml-2" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        إرسال الطلب
                        <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                  
                  {formSubmitted && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                      <span>تم إرسال طلبك بنجاح! سيتواصل معك مندوبنا قريباً</span>
                    </div>
                  )}
                </motion.form>
              )}

              {/* Other Methods Information */}
              {donationMethod === 'other-methods' && (
                <motion.div
                  className="space-y-6 md:space-y-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                      <FaWallet className="ml-2 text-[var(--gradient-start)]" />
                      المحفظة الإلكترونية
                    </h3>
                    <p className="text-gray-700 mb-2">يمكنك التبرع عن طريق تحويل المبلغ إلى المحفظة الإلكترونية:</p>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-center font-bold text-lg">
                      01065309906
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                      <FaMapMarkerAlt className="ml-2 text-[var(--gradient-start)]" />
                      التبرع في المقر
                    </h3>
                    <p className="text-gray-700 mb-2">يمكنك زيارة مقر الجمعية والتبرع مباشرة:</p>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className="font-semibold">العنوان: أبو حماد (بجوار المزلقان الجديد)، الشرقية، مصر</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                      <FaRegClock className="ml-2 text-[var(--gradient-start)]" />
                    مواعيد العمل للتبرع
                    </h3>
                    <p className="text-gray-700 mb-2">يمكنك التبرع معنا خلال ساعات العمل التالية:</p>
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <p className="font-semibold">الأحد - الخميس: 9:00 ص - 5:00 م</p>
                      <p className="font-semibold">الجمعة - السبت: 10:00 ص - 3:00 م</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center mb-4 md:mb-6 justify-end">
              <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                لماذا تتبرع لرسالة أبو حماد؟
              </h3>
              <FaShieldAlt className="text-2xl md:text-3xl text-[var(--gradient-start)] mr-4 ml-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                'تبرعك هنا... بيغيّر هناك!',
                'كل قرش بتتبرع بيه = أمل جديد لحد محتاج',
                ' بتتبرع وانت متطمن... والتقرير بيوصلك لحد عندك!',
                ' خيرك في أيد أمينة... وشغّال على الأرض',
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-end">
                  <span className="text-gray-600 text-sm md:text-base">{item}</span>
                  <FaCheckCircle className="text-[var(--gradient-start)] ml-3" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
