export default class BMI{
  bmiCalculate(Weight, Height)
  {
    var BMI = Weight / Height**2;
    return BMI;
  }
  bmiRegion(BMI, Region)
  {
    var Grade = 'None';
    if (Region == 'Asian')
    {
      if (BMI <= 18.5){ Grade = 'Under weight'; }
      else if (BMI >= 18.5 && BMI <= 24.9){ Grade = 'Normal weight'; }
      else if (BMI >= 24.9 && BMI <= 29.9){ Grade = 'Overweight'; }
      else if (BMI > 29.9){ Grade = 'Obesity'; }
      return Grade;
    }
    if (Region == 'Western')
    {
      if (BMI <= 19.5){ Grade = 'Under weight'; }
      else if (BMI >= 19.5 && BMI <= 34.5){ Grade = 'Normal weight'; }
      else if (BMI >= 34.9 && BMI <= 39.9){ Grade = 'Overweight'; }
      else if (BMI > 39.9){ Grade = 'Obesity'; }
      return Grade;
    }
  }
}