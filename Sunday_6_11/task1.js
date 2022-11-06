
for(let x=0; x<=4 ;x++)
{
    let y=x+1

    if(y==1)
    {
    console.log(y)
    }
else if (y==2)
{
    console.log(y,++y);
}
else if (y==3)
{
    console.log(++y,y+=1,y+=1);
}
else if (y==4)
{
  console.log(y+=3,y+=1,y+=1,y+=1)  
}
}
