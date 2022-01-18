

export const withTitle=(TargetComponent,defaultTitle)=>{

    const TitledComponent= (props)=>{
        let title=props.screenTitle || defaultTitle;
        return (
            <div>
                <h1>{title}</h1>
                <TargetComponent {...props} />
            </div>
        )

    }
    return TitledComponent;

};