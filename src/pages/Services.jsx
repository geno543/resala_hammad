import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaPlay, FaImage } from 'react-icons/fa';

const Services = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  // DEVELOPER NOTE: Change the image paths here to update the service images
  // Set showImage to true to display the image, false to show the placeholder
  const activities = [
    {
     id: 1,
     title: 'الإطعام',
     description: 'نقدم حزم غذائية للعائلات المحتاجة على مدار العام، مع حملات خاصة خلال شهر رمضان المبارك.',
     videos: ['/images/Food/FoodReal.mp4'],
     images: ['/images/Food/إطعام-صورة-1.jpg', '/images/Food/إطعام-صورة-2.jpg'],
     // Change this path to update the card placeholder image
     cardImage: '/images/Food/إطعام-صورة-1.jpg',
     // Set to true to display the card image, false to show the placeholder
     showCardImage: true,
    },
    {
      id: 2,
      title: 'أنوار رسالة',
      description: 'توفير المواد التعليمية وخدمات التدريس الخصوصي والمستلزمات المدرسية للطلاب من العائلات ذات الدخل المنخفض.',
      images: ['/images/light/light.jpg', '/images/light/light-2.jpg'],
      videos: ['/images/light/light-video.mp4'],
      // Change this path to update the card placeholder image
      cardImage: '/images/light/light.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
    {
      id: 3,
      title: 'معارض رسالة',
      description: 'تُعد معارض جمعية رسالة الخيرية نافذة أمل تُوفر الملابس والاحتياجات الأساسية للأسر المستحقة مجانًا، في أجواء تحفظ الكرامة وتُعزز روح التكافل.',
      images: ['/images/gallary/clothes.jpg', '/images/gallary/clothes-2.jpg'],
      videos: ['/images/gallary/clothes-video.mp4'],
       // Change this path to update the card placeholder image
      cardImage: '/images/gallary/clothes.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
    {
      id: 4,
      title: 'تحقيق الأماني',
      description: 'نشاط تحقيق الأماني في جمعية رسالة يُجسد الحلم على أرض الواقع، حيث يُلبَّى فيه رجاء المحتاجين، ويُزرع الفرح في القلوب بأبسط الأمنيات.',
      images: ['/images/wish/wish.jpg', '/images/wish/wish-2.jpg'],
      videos: ['/images/wish/wish-video.mp4'],
       // Change this path to update the card placeholder image
      cardImage: '/images/wish/wish.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 5,
      title: 'مساعدات الأسر الفقيرة',
      description: 'مساعدات الأسر الفقيرة في جمعية رسالة تُقدَّم بكل حب واهتمام، لتخفيف الأعباء اليومية وبناء حياة أكثر كرامة واستقرارًا للمحتاجين.',
      images: ['/images/help/help.jpg', '/images/help/help-2.jpg'],
      videos: ['/images/help/help-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/help/help.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 6,
      title: 'الزيارات',
      description: 'نشاط الزيارات في جمعية رسالة هو لحظة إنسانية صادقة، يذهب فيها المتطوعون بأنفسهم لاحتضان قلوب أنهكها المرض أو الوحدة، حاملين دفء الكلام ولمسة الأمل لمن ظنّ أن لا أحد يطرق بابه.',
      images: ['/images/visit/visit.jpg', '/images/visit/Visit-2.jpg'],
      videos: ['/images/visit/Visit-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/visit/visit.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 7,
      title: 'أصدقاء البيئة',
      description: 'نشاط أصدقاء البيئة في جمعية رسالة هو نداء حبّ للأرض، يقوده متطوعون يُنقّبون عن الأمل بين النفايات، يزرعون الأشجار وينظفون الشوارع، ليصنعوا فرقًا حقيقيًا ويمنحوا الطبيعة حقها في الحياة.',
      images: ['/images/environment/Environment-photo.jpg', '/images/environment/Environment-photo-2.jpg'],
      videos: ['/images/environment/Environment-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/environment/Environment-photo.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 8,
      title: 'إعمار المساجد',
      description: 'نشاط إعمار المساجد في جمعية رسالة هو عملٌ يزهر فيه الخير، حيث يمدّ المتطوعون أيديهم لترميم بيوت الله، تنظيفها وتجميلها، في مشهد يفيض بالبركة ويُجسّد حب العبادة بعملٍ صامت لكنه عظيم.',
      images: ['/images/mosque/Mosque.jpg', '/images/mosque/Mosque-2.jpg'],
      videos: ['/images/mosque/Mosque-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/mosque/Mosque.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 9,
      title: 'الأخ الأكبر',
      description: 'نشاط الأخ الأكبر في جمعية رسالة هو حضن أمانٍ للأطفال الأيتام، حيث يرافقهم متطوعون كإخوة حقيقيين، يمنحونهم وقتًا، وحنانًا، وتوجيهًا يملأ فراغ الفقد بحبٍ لا يُشترى.',
      images: ['/images/bro/bro.jpg', '/images/bro/bro-2.jpg'],
      videos: ['/images/bro/bro-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/bro/bro.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 10,
      title: 'الابن البار',
      description: 'نشاط الابن البار في جمعية رسالة هو تعبير عن الوفاء، حيث يقوم المتطوعون بزيارة كبار السن وتقديم الدعم والرعاية لهم، ليشعروا بأنهم ما زالوا محط اهتمام وحب، وكأنهم في حضن أبنائهم الحقيقيين.',
      images: ['/images/son/son.jpg', '/images/son/son-2.jpg'],
      videos: ['/images/son/son-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/son/son.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
     {
      id: 11,
      title: 'افرح',
      description: 'نشاط "افرح" في جمعية رسالة هو لحظات من السعادة الصافية، حيث يجتمع المتطوعون لإدخال البهجة على قلوب الأطفال والأسر المحتاجة، من خلال توزيع الهدايا وتنظيم الفعاليات التي تضيء عيونهم وتملأ حياتهم بالأمل.',
      images: ['/images/happy/Happy-photo.jpg', '/images/happy/Happy-photo-2.jpg'],
      videos: ['/images/happy/Happy-video.mp4'],
        // Change this path to update the card placeholder image
      cardImage: '/images/happy/Happy-photo.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
    {
      id: 12,
      title: 'ارحموا للرفق بالحيوان',
      description: 'نشاط "ارحموا للرفق بالحيوان" في جمعية رسالة هو نداء إنساني صادق، حيث يتوجه المتطوعون بقلوب رحيمة لرعاية الحيوانات المعذبة والمشردة، يوفرون لهم الغذاء والعلاج والمأوى، في محاولة لتخفيف معاناتهم ومنحهم فرصة جديدة للحياة بسلام ورفق',
      images: ['/images/animal/animal-photo.jpg', '/images/animal/animal-photo-2.jpg'],
      videos: ['/images/animal/animal-video.mp4'],
       // Change this path to update the card placeholder image
      cardImage: '/images/animal/animal-photo.jpg',
      // Set to true to display the card image, false to show the placeholder
      showCardImage: true,
    },
  ];

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
            خدماتنا
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            أنشطتنا الخيرية
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            اكتشف أنشطتنا وخدماتنا الخيرية المتنوعة التي تحدث فرقًا في مجتمعنا
          </motion.p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="card group transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] overflow-hidden rounded-t-2xl">
                {activity.showCardImage ? (
                  <img
                    src={activity.cardImage}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <FaImage className="text-white/50 text-3xl mb-2" />
                      <span className="text-white/70 text-sm font-semibold">صورة الخدمة</span>
                    </div>
                  </>
                )}
                
                {/* Developer Note: To display an image, set showCardImage to true in the activities array */}
              </div>
              <div className="p-6 md:p-8 bg-white rounded-b-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {activity.title}
                </h3>
                <h4 className="text-base md:text-lg mb-3 md:mb-4 text-gray-800">{activity.englishTitle}</h4>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300">
                  {activity.description}
                </p>
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="btn-primary w-full group"
                >
                  المزيد من التفاصيل
                  <FaArrowLeft className="mr-2 inline-block transform group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    onClick={() => setSelectedActivity(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FaTimes size={24} />
                  </motion.button>
                  <div className="text-right">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                      {selectedActivity.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-gray-800">{selectedActivity.englishTitle}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                  {selectedActivity.description}
                </p>

                {/* Image Gallery */}
                <div className="mb-8 md:mb-12">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center justify-end">
                    معرض الصور
                    <FaImage className="ml-2 text-[var(--gradient-start)]" />
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {selectedActivity.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Video Gallery */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center justify-end">
                    معرض الفيديو
                    <FaPlay className="ml-2 text-[var(--gradient-start)]" />
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    {selectedActivity.videos.map((video, index) => (
                      <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                        <video
                          className="w-full aspect-video object-cover"
                          controls
                          poster={selectedActivity.images[0]}
                        >
                          <source src={video} type="video/mp4" />
                          متصفحك لا يدعم تشغيل الفيديو.
                        </video>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
