function main()
{
    var values = ["hello", "hi","greetings", "sup"];
    var weight = [20, 10, 5, 1];
    console.log(values[rouletteSelect(weight)]);
}
function rouletteSelect(weight)
{
    this.weightSum = 0;
    for(var i = 0; i < weight.length; i++)
    {
        weightSum += weight[i];
    }

    value = Math.random * weightSum;
    for (var i = 0; i < weight.length; i++)
    {
        value -= weight[i];
        if(value <= 0)return i;

    }
    return i;
}