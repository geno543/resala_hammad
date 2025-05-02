import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaHandHoldingHeart, FaQuoteRight, FaImage, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  // DEVELOPER NOTE: Change the image paths here to update the achievement images
  const achievements = [
    {
      id: 1,
      volunteer: 'إيمان ناجي',
      role: 'متطوعة و مسؤولة سابقة',
      achievement: 'بعد نجاحها في جمع التبرعات لبناء الأسقف، تواصل الأستاذة إيمان مسيرتها الخيرية، حيث تقود حاليًا حملة لجمع التبرعات لنشاط الإطعام... خطوات متواصلة في درب الخير!',
      timing: 'فبراير 2025',
      // Change this image path to update the image
      image: '/images/achievements/food-distribution.jpg',
      // Set to true to display the image, false to show the placeholder
      showImage: false,
    },
    {
      id: 2,
      volunteer: 'فادي نجم',
      role: 'متطوع و مسؤول سابق',
      achievement: 'أسس فادي عددًا من الدروس الدينية وبرامج التربية ضمن نشاط أنوار رسالة، ولا يزال يواصل عطاؤه بإيمان وجهد لا ينقطع.',
      timing: 'مارس 2025',
      // Change this image path to update the image
      image: '/images/Achievements/fady.jpg',
      // Set to true to display the image, false to show the placeholder
      showImage: true,
    },
    {
      id: 3,
      volunteer: 'كريم حسام',
      role: 'مسؤول النشاط الطبي',
      achievement: 'ضمن جهوده المنتظمة في العمل الخيري، يواصل كريم متابعة النشاط الطبي وتوفير وصرف الدواء للمحتاجين... عطاء متواصل يستحق التقدير!',
      timing: 'يناير 2025',
      // Change this image path to update the image
      image: '/images/Achievements/kareem.jpg',
      // Set to true to display the image, false to show the placeholder
      showImage: true,
    },
  ];

  // Web Development Team
  const webDevTeam = [
    {
      id: 1,
      name: 'محمد محمد رمضان',
      role: 'مطور واجهة أمامية',
      bio: 'مطور ويب متخصص في تقنيات React وTailwind CSS، ساهم في تطوير واجهة موقع رسالة أبوحماد بتصميم عصري وسهل الاستخدام.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
      github: 'https://github.com/geno543',
      linkedin: 'https://linkedin.com/in/ahmed-dev',
      image: '/images/team/profile.png',
      showImage: true
    },
    {
      id: 2,
      name: 'محمد نجم',
      role: 'مصممة واجهات المستخدم',
      bio: 'مصممة UI/UX متخصصة في إنشاء تجارب مستخدم سلسة وجذابة، ساهمت في تصميم واجهات موقع رسالة أبوحماد لتعكس هوية المؤسسة.',
      skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design'],
      github: 'https://github.com/sara-design',
      linkedin: 'https://linkedin.com/in/sara-design',
      image: '/images/team/profile.png',
      showImage: true
    },
    {
      id: 3,
      name: 'محمد وائل',
      role: 'مطور خلفية',
      bio: 'مطور برمجيات متخصص في تطوير أنظمة الخلفية وقواعد البيانات، عمل على تطوير نظام إدارة المحتوى الخاص بموقع رسالة أبوحماد.',
      skills: ['Node.js', 'Express', 'MongoDB', 'API Development'],
      github: 'https://github.com/mohamed-backend',
      linkedin: 'https://linkedin.com/in/mohamed-backend',
      image: '/images/team/profile.png',
      showImage: true
    }
  ];

  const impactAreas = [
    {
      title: 'التعليم',
      description: 'الاهتمام باولاد الاسر المستحقه من خلال المذاكره لهم فى مقر الجمعيه أو تحويلهم لمدرسين خارج المقر',
      icon: <FaStar className="text-3xl md:text-4xl" />,
      stats: 'أكثر من 100 طالب تم دعمهم',
    },
    {
      title: 'الرعاية الصحية',
      description: 'الرعايه الصحيه تشمل تحويلات طيبه لدكاتره بجميع التخصصات وصرف روشتات للاسر المستحقه ',
      icon: <FaMedal className="text-3xl md:text-4xl" />,
      stats: 'أكثر من 60 مريض تتم خدمتهم شهريا',
    },
    {
      title: 'الأمن الغذائي',
      description: 'تشتمل عمل وجبات ساخنه مكونه من خضار وارز وبروتين وفاكهه وتوزيعها على الأسر المستحقه',
      icon: <FaHandHoldingHeart className="text-3xl md:text-4xl" />,
      stats: 'أكثر من 400 عائلة تم مساعدتها',
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
            قصتنا
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            عن رسالة أبو حماد
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            نحن مؤسسة خيرية مكرسة لخدمة مجتمع أبو حماد من خلال مختلف المبادرات والبرامج الإنسانية.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              className="card group p-6 md:p-8 hover:bg-gradient-to-br hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-all duration-500"
              initial={{ opacity: 0, x: 20 }} /* Changed from -20 to 20 for RTL */
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <FaQuoteRight className="text-2xl md:text-3xl mb-4 md:mb-6 text-[var(--gradient-start)] group-hover:text-white/80" />
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">رسالتنا</h2>
                <p className="text-sm md:text-base group-hover:text-white/90">
                 نحن حمعية رسالة فرع أبو حماد المشهره تحت رقم 3276 لسنه 2014, نسعى إلى نشر ثقافة التطوع والإيجابية داخل المجتمع، وزرع روح الانتماء، ومكافحة الأنانية ومفهوم "وأنا مالي"، بالإضافة إلى التصدي للأفكار السلبية.
وقد اخترنا اسم "رسالة" ليعبر عن هدفنا في نشر رسالة التطوع، والإيجابية، والتعاون، داخل أبوحماد والمجتمع بأسره.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card group p-6 md:p-8 hover:bg-gradient-to-br hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-all duration-500"
              initial={{ opacity: 0, x: -20 }} /* Changed from 20 to -20 for RTL */
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <FaQuoteRight className="text-2xl md:text-3xl mb-4 md:mb-6 text-[var(--gradient-start)] group-hover:text-white/80" />
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">رؤيتنا</h2>
                <p className="text-sm md:text-base group-hover:text-white/90">
                  تسعى جمعية رسالة أبوحماد إلى تقديم الدعم والمساعدات للأيتام، والمسنين، وذوي الاحتياجات الخاصة، وتنظيم برامج محو الأمية وتوفير فرص التعليم للفئات المهمشة. كما تعمل الجمعية على تنظيم قوافل طبية وتقديم الدعم الصحي للمجتمعات الفقيرة، بالإضافة إلى توفير الملابس، والغذاء، والمأوى للمحتاجين.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            مجالات تأثيرنا
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="impact-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-[var(--gradient-start)] group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mt-3 md:mt-4 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300">
                  {area.description}
                </p>
                <div className="text-base md:text-lg font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {area.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Volunteer Achievements */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            إنجازات المتطوعين
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="news-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-48 md:h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] relative overflow-hidden">
                  {achievement.showImage ? (
                    <img
                      src={achievement.image}
                      alt={achievement.volunteer}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <FaImage className="text-white/50 text-3xl mb-2" />
                        <span className="text-white/70 text-sm font-semibold">صورة المتطوع</span>
                      </div>
                    </>
                  )}
                  
                  {/* Developer Note: To display an image, set showImage to true in the achievements array */}
                </div>
                <div className="p-4 md:p-8 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex items-center mb-3 md:mb-4">
                    <FaTrophy className="text-xl md:text-2xl text-[var(--gradient-start)] ml-2" />
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-[var(--gradient-start)] transition-colors duration-300">
                      {achievement.volunteer}
                    </h3>
                  </div>
                  <p className="font-bold mb-2 text-sm md:text-base bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                    {achievement.role}
                  </p>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300">
                    {achievement.achievement}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">{achievement.timing}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Team */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="section-title text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            فريق تطوير الموقع
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {webDevTeam.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-48 md:h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] relative overflow-hidden flex items-center justify-center">
                  {member.showImage ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-40 md:h-48 w-40 md:w-48 object-contain rounded-full border-4 border-white shadow-lg"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <FaCode className="text-white/50 text-3xl mb-2" />
                        <span className="text-white/70 text-sm font-semibold">صورة المطور</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[var(--gradient-start)] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-800 mb-2">المهارات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-reverse space-x-3">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[var(--gradient-start)] transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[var(--gradient-start)] transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
