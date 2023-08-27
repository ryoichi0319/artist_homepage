import React from 'react'
import styles from "./address.module.css"
const Address = () => {
  return (
    <div>
        <div className={styles.address}>
                <h3 className='address-name'>Acht8</h3>
                <p className='access-address'>546-0012  <br /> 大阪市東住吉区中野3-12-3 ドミール春光1F</p>                            
                <p>TEL:   092-626-1777</p>   <p>FAX:    092-626-1781</p>
                
                </div>
    </div>
  )
}

export default Address