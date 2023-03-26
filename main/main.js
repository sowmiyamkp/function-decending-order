  let array=[90,30,50,15,1,2]
function decenting(array)
{
	for(i=0;i<array.length;i++)
	{
		for(j=i+1;j<array.length;j++)
		{
			if(array[i]<array[j])
			{
				temp=array[j];            v                                              
				array[j]=array[i];
				array[i]=temp;
			}
				
		}
        	console.log(array[i]);		
	 }
	 console.log(array);	

	
	return array;
}
console.log(decenting(array));