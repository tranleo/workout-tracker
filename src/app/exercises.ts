export interface Exercise {
    id: number;
    name: string;
    goal_sets: number;
    goal_repetitions: number;
  }
  
  export const exercises = [
    {
      id: 1,
      name: 'Bench',
      goal_sets: 4,
      goal_repetitions: 8
    },
    {
      id: 2,
      name: 'Squat',
      goal_sets: 3,
      goal_repetitions: 6
    },
    {
      id: 3,
      name: 'Deadlift',
      goal_sets: 1,
      goal_repetitions: 3
    },
    {
      id: 4,
      name: 'Barbell Row',
      goal_sets: 5,
      goal_repetitions: 5
    },
    {
      id: 5,
      name: 'Shoulder Press',
      goal_sets: 4,
      goal_repetitions: 12
    },
    {
      id: 6,
      name: 'Lateral Raises',
      goal_sets: 5,
      goal_repetitions: 12
    },
    {
      id: 7,
      name: 'Bicep Curls',
      goal_sets: 4,
      goal_repetitions: 12
    },
    {
      id: 8,
      name: 'Calf Raises',
      goal_sets: 3,
      goal_repetitions: 20
    }
  ];
  