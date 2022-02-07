import {SpinnerOverlay, SpinnerContainer} from './with-snipper.styles'


const WithSnipper = WrappedComponent =>({isLoading, ...otherProps})=>{
    return isLoading ? (<SpinnerOverlay>
           <SpinnerContainer />
       </SpinnerOverlay>)
   : (<WrappedComponent {...otherProps} />)
}

export default WithSnipper;