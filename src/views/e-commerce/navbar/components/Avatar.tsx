import { getImageUrl } from '@/composable/useImageUrl'

const Avatar = () => {
  return (
    <div className='avatar border-2 rounded-full xl:hover:border-tritanomaly transition duration-400 group/item'>
      <img
        src={getImageUrl('image-avatar.png')}
        className='w-8 md:w-12 object-cover'
      />
    </div>
  )
}

export default Avatar