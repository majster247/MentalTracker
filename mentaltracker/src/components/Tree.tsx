import React, { useState } from 'react';

interface TreeProps {
  selectedGoal?: string;
}

const Tree: React.FC<TreeProps> = ({ selectedGoal }) => {
  const [goals] = useState([
    {id: 'goal1',title: 'Main Goal',subgoals: [{
          id: 'subgoal1',title: 'Subgoal 1',subgoals: [{
              id: 'subsubgoal1',title: 'Subsubgoal 1',subgoals: [],},],},
        {id: 'subgoal2',title: 'Subgoal 2',subgoals: [],},],},
    {id: 'goal2',title: 'Another Goal',subgoals: [],},
  ]);

  const renderGoalTree = (goal: any) => {
    return (
      <li key={goal.id}>
        {goal.title}
        {goal.subgoals.length > 0 && (
          <ul>{goal.subgoals.map((subgoal: any) => renderGoalTree(subgoal))}</ul>
        )}
      </li>
    );
  };

  return (
    <div>
      <h2>Goal Tree</h2>
      {selectedGoal && <p>Selected Goal: {selectedGoal}</p>}
      <ul>{goals.map((goal) => renderGoalTree(goal))}</ul>
    </div>
  );
};

export default Tree;
