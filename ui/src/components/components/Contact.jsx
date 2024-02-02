import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { StarsCanvas, VespaCanvas } from './canvas'
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';

import { styles } from '../../styles';
const Contact = () => {

  const formRef = useRef();
  const [form, setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_dbj595n',
      'template_2y57og7',
      {
        from_name: form.name,
        to_name:'Keith',
        from_email:form.email,
        to_email:'keithng.096@gmail.com',
        message:form.message
      },
      '8ak_R26Hu0hqfYT3l'
      )
      .then(()=> {
        setLoading(false);
        alert('Thank you, I will get back to you as soon as possible.')
        setForm({
          name:'',
          email:'',
          message:'',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);

        alert('Something went wrong')
      }
      )
  }
  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p
          className={styles.sectionSubText}
        >Work with me </p>
        <h3
          className={styles.sectionHeadText}
        >
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder=' Your Name...'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg ouytlined-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Email</span>
            <input
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Your Email...'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg ouytlined-none border-none font-medium'
            />
          </label>          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your Message...'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg ouytlined-none border-none font-medium'
            />
          </label>
          <button
            type='sumbit'
            className='bg-tertiary rounded-md py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <VespaCanvas />
      </motion.div>
      <StarsCanvas />
    </div>
  )
}

export default SectionWrapper (Contact,'contact')