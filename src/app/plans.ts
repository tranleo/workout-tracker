export interface Plan {
    id: number;
    name: string;
    exercises: any;
  }
  
  export const planEx = [
    {
      id: 10,
      name: 'Plan #1',
      exercises:
        [{
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
        }]
    }
  ];
  