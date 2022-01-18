import If from '../components/If';

const withVisibility= ( TargetComponent, defaultVisibility=true ) =>{


    //HOC component
    return (props)=>{
        let visibility=defaultVisibility;
       // console.log('using withVisibility...');
        if(props.visibility!==undefined){
       //     console.log('applying props.visibility',props.visibility)
            visibility=props.visibility;
        }

        return (
            <If condition={visibility}>
                <TargetComponent {...props}  />
            </If>
        );
    }
}

export default withVisibility;