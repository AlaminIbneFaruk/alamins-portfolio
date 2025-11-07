const Resume = () => {
  return (
    <div className="m-8 py-24 h-[calc(100%||60vh)] " id="resume">
      <h2 className="text-5xl font-bold mb-4 text-center">Resume</h2>
      <p className="flex flex-col gap-12">
        <iframe
          src="https://drive.google.com/file/d/1Xz5tI570jVYuxyh1jl2AMkRd5zJ_OX9l/preview"
          width="640"
          height="480"
          allow="autoplay"
          className="w-full h-[80vh] rounded-lg outline-2 outline-offset-2 outline-info"
        ></iframe>

        <a
          href="https://drive.google.com/uc?export=download&id=1Xz5tI570jVYuxyh1jl2AMkRd5zJ_OX9l"
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-outline btn-block  justify-items-center btn-info font-semibold transition duration-100"
        >
          Download Resume
        </a>
      </p>
    </div>
  );
};

export default Resume;
