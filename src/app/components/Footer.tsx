function EmailIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='currentColor'
        d='M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z'
      ></path>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke='currentColor'
        fill='none'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
      ></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 448 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='currentColor'
        d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
      ></path>
    </svg>
  );
}

const currYear = new Date().getUTCFullYear();

export default function Footer() {
  return (
    <footer className='mb-16'>
      <ul className='font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 justify-center'>
        <li>
          <a
            className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            href='https://github.com/druwan'
          >
            <GitHubIcon />
            {/* <p className='ml-2 h-7'>GitHub</p> */}
          </a>
        </li>
        <li>
          <a
            className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/christophervestman/'
          >
            <LinkedInIcon />
            {/* <p className='ml-2 h-7'>LinkedIn</p> */}
          </a>
        </li>
        <li>
          <a
            className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
            rel='noopener noreferrer'
            href='mailto:hello@christophervestman.dev'
          >
            <EmailIcon />
            {/* <p className='ml-2 h-7'>Email</p> */}
          </a>
        </li>
      </ul>
      <p className='mt-4 text-center'>&copy; {currYear} Christopher Vestman</p>
    </footer>
  );
}
