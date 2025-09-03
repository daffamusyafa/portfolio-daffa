import { Skill, skills } from "@/data/skills";

const SkillSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Tech Stack</h2>
      {Object.entries(skills).map(([category, skillList]) => {
        const typedSkillList = skillList as Skill[];
        return (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-semibold capitalize mb-3 text-gray-700 dark:text-gray-300">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {typedSkillList.map((skill, index) => {
                const Icon = skill.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                return (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 flex items-center gap-3 hover:scale-[1.03] transition">
                    <Icon className="text-2xl" style={{ color: skill.color }} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SkillSection;
