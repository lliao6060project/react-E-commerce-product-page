import { useEffect, useState, forwardRef } from 'react'

const BackToTop = forwardRef<HTMLDivElement, any>(({...props}, ref) => {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    // console.log('mounted');
    const handler = () => {
      window.scrollY > 200
        ? setVisible(true)
        : setVisible(false)
    };

    window.addEventListener('scroll', handler);

    // 記得要在每次實例銷毀時清除EventListener, 否則事件會越加越多, 容易出問題
    return () => {
      // console.log('unmounted');
      window.removeEventListener('scroll', handler);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`
        fixed
        ${visible ? 'fixed visible': 'static invisible opacity-70'}
        cursor-pointer
        place-content-center
        animate-slide-up
        duration-300
        rounded-full
        bg-tritanomaly
        text-white
        border-2
        border-slate-100
        p-3
        drop-shadow-lg
        right-3
        bottom-6
        xl:bottom-16
        xl:right-16
        xl:p-4
      `}
      onClick={() => scrollToTop()}
    >
      <div className='xl:animate-bounce'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nOXNrQ5BARjG8UPTBNLZZJs5SWLD3IDkBiQ3ILkByQWwCW6AYrpCEE6RTjCJEWw+ivI3wWy8Z5yPN5h/fvb8DOOvA0xgBiyAlBZiAWuebYBc2EgROPHeGSiFheSBI+5dgHJQJPMBeXTfZP0iccDh+1ZAwg80wnsTP5DtA7I9Qy9oBLgKx4dAxy7YVoAcDWgpQHMNaCpAYw1oKEADDagnQB0NqC1ALQ2oKUANDaguQDUNqCpAFQ2oIECWBpQWIFMDSgpQTAOKAl1gB+yBfujIT3UDCxh520Ud9GkAAAAASUVORK5CYII=" />
      </div>
    </div>
  )
})

export default BackToTop