import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/Resala.AboHamad/' },
    // Add other social links as needed
  ];

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Reset previous states
    setSubmitSuccess(false);
    setSubmitError(null);
    
    // Validate email
    if (!validateEmail(email)) {
      setSubmitError('يرجى إدخال بريد إلكتروني صحيح');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const subscriptionData = {
        date: new Date().toISOString(),
        email: email,
        status: "مشترك جديد"
      };
      
      const response = await fetch(process.env.REACT_APP_SHEETDB_API_NEWSLETTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([subscriptionData])
      });
      
      if (!response.ok) {
        throw new Error('فشل في الاشتراك. الرجاء المحاولة لاحقاً.');
      }
      
      setSubmitSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitError(error.message || 'حدث خطأ غير متوقع');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[var(--gradient-end)] to-[var(--gradient-start)] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* About Section */}
            <motion.div {...fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  رسالة أبوحماد
                </span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                نحدث فرقًا في مجتمعنا من خلال التعاطف والتفاني والوحدة.
              </p>
              <div className="flex space-x-reverse space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div {...fadeInUp} className="md:mr-8">
              <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                {[
                  { to: '/volunteer', label: 'تطوع معنا' },
                  { to: '/donate', label: 'تبرع الآن' },
                  { to: '/services', label: 'خدماتنا' },
                  { to: '/news', label: 'آخر الأخبار' }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <FaArrowLeft className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">اتصل بنا</h3>
              <ul className="space-y-4">
                {[
                  { icon: <FaPhone />, text: '01065309906' },
                  { icon: <FaPhone />, text: '01159092590' },
                  { icon: <FaMapMarkerAlt />, text: 'أبو حماد، الشرقية، مصر' },
                  { icon: <FaEnvelope />, text: 'info@resala-abuhammad.org' }
                ].map((contact, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <span className="ml-3 mt-1">{contact.icon}</span>
                    <span className="hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div {...fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-4 md:mb-6">النشرة الإخبارية</h3>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                ابق على اطلاع بأحدث أخبارنا وأنشطتنا.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitError) setSubmitError(null);
                    }}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gradient-start)] transition-colors duration-300"
                    disabled={isSubmitting}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin ml-2" />
                      جاري الإرسال...
                    </>
                  ) : (
                    'اشترك'
                  )}
                </motion.button>
                
                {/* Success Message */}
                {submitSuccess && (
                  <div className="mt-2 p-3 bg-green-900/30 border border-green-500 rounded-lg text-green-400 flex items-center text-sm">
                    <FaCheckCircle className="ml-2" />
                    <span>تم الاشتراك بنجاح! شكراً لك</span>
                  </div>
                )}
                
                {/* Error Message */}
                {submitError && (
                  <div className="mt-2 p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-400 flex items-center text-sm">
                    <FaExclamationTriangle className="ml-2" />
                    <span>{submitError}</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>&copy; {new Date().getFullYear()} رسالة أبو حماد. جميع الحقوق محفوظة.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;