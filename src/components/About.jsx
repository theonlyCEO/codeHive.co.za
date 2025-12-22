import { motion } from 'framer-motion';

const About = () => {
  const principles = [
    {
      title: "Innovation First",
      description: "We constantly explore emerging technologies and methodologies to deliver cutting-edge solutions that give you a competitive edge.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Collaborative Excellence",
      description: "Our cross-functional teams work seamlessly together, combining diverse expertise to solve complex challenges efficiently.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Client Partnership",
      description: "We believe in building long-term partnerships, working closely with you to understand and achieve your business objectives.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Quality Obsession",
      description: "Every line of code, every design element, and every strategic decision is crafted with meticulous attention to detail.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "150+" },
    { label: "Client Retention", value: "95%" },
    { label: "Team Members", value: "20+" }
  ];

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block glass px-6 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Our Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="block">Building The Future</span>
            <span className="block">
              <span className="shimmer-text">Of Digital</span> Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We are a forward-thinking digital agency specializing in creating exceptional web experiences. 
            Our team combines technical expertise with creative vision to deliver solutions that drive real business results.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass p-8 rounded-3xl text-center hover-lift">
              <div className={`text-4xl font-bold bg-gradient-to-r ${index === 0 ? 'from-blue-600 to-cyan-600' : index === 1 ? 'from-purple-600 to-pink-600' : index === 2 ? 'from-green-600 to-teal-600' : 'from-orange-600 to-red-600'} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Principles */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass p-8 rounded-3xl hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 gradient-shift opacity-10"></div>
          <div className="relative glass p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;