import { motion } from 'framer-motion';
import { FaUsers, FaHandHoldingHeart, FaHome, FaArrowLeft, FaImage } from 'react-icons/fa';

const Home = () => {
  // DEVELOPER NOTE: Define news items with image paths
  const newsItems = [
    {
      id: 1,
      // Change this image path to update the image
      image: '/images/News/potatos.jpg',
      // Set to true to display the image, false to show the placeholder
      showImage: true,
      title: 'توزيع بطاطس للمحتاجين في رسالة أبوحماد',
      excerpt: 'تم بحمد الله توزيع بطاطس على الأسر المحتاجة بجمعية رسالة فرع أبوحماد.'
    },
    {
      id: 2,
      // Change this image path to update the image
      image: '/images/News/sak.jpg',
      // Set to true to display the image, false to show the placeholder
      showImage: true,
      title: 'شارك بصك أضحيتك مع رسالة أبوحماد',
      excerpt: 'ساهم في إدخال الفرحة على المحتاجين بصك أضحيتك مع جمعية رسالة فرع أبوحماد – ايدك تفرّح قلوب كتير!'
    },
    {
      id: 3,
      // Change this image path to update the image
      image: '/images/News/Mohamed Explains.jpg',
      // Set to true to display the image, false to show the placeholder
      showImage: true,
      title: 'كورس أساسيات البرمجة في رسالة أبوحماد',
      excerpt: 'تم بحمد الله تنفيذ كورس لتعليم أساسيات البرمجة داخل جمعية رسالة فرع أبوحماد، بهدف تمكين الشباب من مهارات المستقبل.'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const impactNumbers = [
    { icon: <FaUsers className="animate-float" />, number: '+100', label: 'متطوع' },
    { icon: <FaHandHoldingHeart className="animate-float" />, number: '+30', label: 'قرية مستفيدة' },
    { icon: <FaHome className="animate-float" />, number: '+400', label: 'عائلة تم دعمها' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)]">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_200px,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_800px,rgba(255,255,255,0.1),transparent)]" />
          </div>
        </div>

        <div className="relative h-full">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <motion.span
                className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                {...fadeInUp}
              >
                نفعل الخير بإحسان
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-shadow leading-tight"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                مرحبًا بكم في رسالة أبوحماد
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-100"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                معًا يمكننا إحداث فرق في مجتمعنا من خلال التعاطف والتفاني والوحدة.
              </motion.p>
              <motion.div
                className="space-x-reverse space-x-4 md:space-x-6 flex flex-col sm:flex-row gap-4 sm:gap-0"
                {...fadeInUp}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="/volunteer" className="btn-primary inline-flex items-center justify-center group">
                  انضم إلينا
                  <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                </a>
                <a href="/donate" className="btn-secondary inline-flex justify-center">ادعم قضيتنا</a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>
      </div>

      {/* Impact Numbers */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            تأثيرنا
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {impactNumbers.map((item, index) => (
              <motion.div
                key={index}
                className="impact-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-fit mx-auto text-4xl md:text-5xl text-[var(--gradient-start)] mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className="text-gray-600 text-base md:text-lg group-hover:text-gray-900 transition-colors duration-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            آخر الأخبار
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="news-card group transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-48 md:h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] relative overflow-hidden">
                  {item.showImage ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <FaImage className="text-white/50 text-3xl mb-2" />
                        <span className="text-white/70 text-sm font-semibold">صورة الخبر</span>
                      </div>
                    </>
                  )}
                  
                  {/* Developer Note: To display an image, set showImage to true in the newsItems array */}
                </div>
                <div className="p-4 md:p-8 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-lg md:text-xl font-bold mt-2 mb-2 md:mb-3 group-hover:text-[var(--gradient-start)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300">
                    {item.excerpt}
                  </p>
                  <a
                    href="/news"
                    className="inline-flex items-center text-[var(--gradient-start)] hover:text-[var(--gradient-end)] transition-colors font-semibold group"
                  >
                    اقرأ المزيد
                    <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat opacity-10" />
        
        <div className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white text-shadow">هل أنت مستعد لإحداث فرق؟</h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90">انضم إلينا في مهمتنا لمساعدة المحتاجين وخلق تغيير إيجابي في مجتمعنا</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-6">
                <a
                  href="/volunteer"
                  className="btn-primary bg-white hover:bg-gray-100 group text-white"
                >
                  <span className="relative z-10">كن متطوعًا</span>
                  <FaArrowLeft className="mr-2 inline-block transform group-hover:-translate-x-1 transition-transform" />
                </a>
                <a
                  href="/donate"
                  className="btn-secondary border-2 border-white text-black hover:bg-white/10 hover:text-white"
                >
                  تبرع الآن
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
