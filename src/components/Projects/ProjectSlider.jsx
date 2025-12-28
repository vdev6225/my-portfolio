"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import ProjectCard from "./ProjectCard"

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const ProjectSlider = ({ projects }) => {
  return (
    <div className="relative mt-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="project-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.priority}>
            <ProjectCard data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectSlider
