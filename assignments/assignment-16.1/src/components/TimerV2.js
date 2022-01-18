
import {useEffect,useState} from 'react';

export const Timer=({render})=>{

    const [time,updateTime] = useState(new Date());

    useEffect(()=>{

        //componentDidMount -->[] --> no dependency 
        const id= setInterval(()=>{
            updateTime(new Date());
        },1000);


        //componentDidUnmount
        return ()=>{
            clearInterval(id);
        }

    },[]); 

    return render(time);

}
export const withTimer= (TargetComponent)=>{
    //HOC component
    let TimerComponent= (props)=>{
    
        return <Timer render={ now=>(<TargetComponent {...props} now={now}/>) } />    
    };

    return TimerComponent;
};