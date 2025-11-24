import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
        { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
        { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
        { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "Ruby", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" },
        { name: "Swift", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" },
        { name: "Kotlin", icon: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" },
        { name: "Objective-C", icon: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg" }
      ]
    },
    {
      title: "Frameworks e Bibliotecas",
      skills: [
        { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
        { name: "React Native", icon: "https://reactnative.dev/img/header_logo.svg" },
        { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
        { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" },
        { name: "Angular", icon: "https://angular.io/assets/images/logos/angular/angular.svg" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
        { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
        { name: "Redux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" },
        { name: "Spring", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
        { name: "Django", icon: "https://cdn.worldvectorlogo.com/logos/django.svg" },
        { name: ".NET", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" },
        { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" }
      ]
    },
    {
      title: "Bancos de Dados",
      skills: [
        { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
        { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
        { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "Oracle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
        { name: "SQL Server", icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
        { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
        { name: "Cassandra", icon: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" },
        { name: "MariaDB", icon: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" }
      ]
    },
    {
      title: "Outras Tecnologias",
      skills: [
        { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Google Cloud", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
        { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
        { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
        { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
        { name: "Jest", icon: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" },
        { name: "Cypress", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" },
        { name: "Selenium", icon: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" },
        { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Heroku", icon: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" },
        { name: "AWS Amplify", icon: "https://docs.amplify.aws/assets/logo-dark.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
            Minhas <span className="bg-gradient-to-r from-[#E70149] to-[#03E5FB] bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E70149] to-[#03E5FB] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Idiomas</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Português</h4>
              <p className="text-gray-600">Nativo</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Espanhol</h4>
              <p className="text-gray-600">Intermediário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;