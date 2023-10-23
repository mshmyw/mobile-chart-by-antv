export const mockBarDataSource = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];

export const mockLineData = [
  {
    name: '本店',
    time: '2017-06-20',
    value: 206,
  },
  {
    name: '本店',
    time: '2017-06-21',
    value: 137,
  },
  {
    name: '本店',
    time: '2017-06-22',
    value: 128,
  },
  {
    name: '本店',
    time: '2017-06-23',
    value: 85,
  },
  {
    time: '2017-06-24',
    value: 94,
  },
  {
    name: '本店',
    time: '2017-06-25',
    value: 71,
  },
  {
    time: '2017-06-26',
    value: 106,
  },
  {
    name: '本店',
    time: '2017-06-27',
    value: 84,
  },
  {
    name: '本店',
    time: '2017-06-28',
    value: 93,
  },
  {
    name: '本店',
    time: '2017-06-29',
    value: 85,
  },
  {
    name: '本店',
    time: '2017-06-30',
    value: 73,
  }
];

export const mockRadarData1 = [
  {
    time: '10-01',
    value: 14380,
    name: '同行同层平均',
  },
  {
    time: '12-02',
    value: 15661,
    name: '同行同层平均',
  },
  {
    time: '12-03',
    value: 13054,
    name: '同行同层平均',
  },
  {
    time: '12-04',
    value: 15345,
    name: '同行同层平均',
  },
  {
    time: '12-05',
    value: 13345,
    name: '同行同层平均',
  },
];

export const mockRadarData2 = [
  ...mockRadarData1,
  {
    time: '10-01',
    value: 15380,
    name: '本店',
  },
  {
    time: '12-02',
    value: 13661,
    name: '本店',
  },
  {
    time: '12-03',
    value: 16054,
    name: '本店',
  },
  {
    time: '12-04',
    value: 12345,
    name: '本店',
  },
  {
    time: '12-05',
    value: 11345,
    name: '本店',
  },
];