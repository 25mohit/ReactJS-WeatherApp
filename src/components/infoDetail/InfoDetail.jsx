import './InfoDetail.css'

export const InfoDetail = ({setShowInfoOne, message}) => {
  return (
    <div className='info-main-div'>
        <div className="info-container">
                <p className="info-message">{ message }</p>
        </div>
    </div>
  )
}
