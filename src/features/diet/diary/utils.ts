export const getPercentage = (
  quantity: number,
  goalQuantity: number
): number => {
  return Math.floor((quantity / goalQuantity) * 100);
};

export const getColor = (percentage: number): 'info' | 'success' | 'error' => {
  if (percentage < 75) {
    return 'info';
  } else if (percentage >= 75 && percentage <= 115) {
    return 'success';
  } else {
    return 'error';
  }
};
