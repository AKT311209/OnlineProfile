import {FC, memo, PropsWithChildren, useEffect, useMemo, useRef} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10, color = 'bg-orange-400'} = skill; // Default color if not provided
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  const skillBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillBarNode = skillBarRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (skillBarNode) {
              skillBarNode.style.setProperty('--percentage', `${percentage}%`);
              skillBarNode.classList.add('skill-bar');
            }
          }
        });
      },
      {threshold: 0.1}
    );

    if (skillBarNode) {
      observer.observe(skillBarNode);
    }

    return () => {
      if (skillBarNode) {
        observer.unobserve(skillBarNode);
      }
    };
  }, [percentage]);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div
          ref={skillBarRef}
          className={`h-full rounded-full ${color}`}
          aria-label="Skill Bar"
          role="progressbar"
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
