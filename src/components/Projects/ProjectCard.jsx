import Image from 'next/image'
import { PreviewIcon } from '../../utils/icons'

const IconText = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

const ProjectCard = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5 transition-all duration-300 hover:border-[#18f2e5]/30">
      <div className="flex flex-col gap-2">
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[160px] w-full rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-accent text-lg font-medium md:font-semibold">{title}</h3>

            {/* {type && (
              <span
                className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${
                  type === 'New 🔥'
                    ? 'animate-blink text-tag'
                    : 'text-accent'
                } backdrop-blur-[80px]`}
              >
                {type}
              </span>
            )} */}
          </div>

          {/* <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {(visitors || numberOfSales) && (
              <IconText
                text={(visitors || numberOfSales)?.toString() || ''}
                icon={Likes}
              />
            )}
            {siteAge && <IconText text={siteAge} icon={Timer} />}
            {earned && <IconText text={earned} icon={Earning} />}
            {(ratings || githubStars) && (
              <IconText
                text={(ratings || githubStars)?.toString() || ''}
                icon={Star}
              />
            )}
          </ul> */}
        </div>
      </div>

      <div>
        <div className="bg-primary text-primary-content mt-3 mb-4 h-[100px] overflow-scroll rounded-2xl px-4 py-2">
          <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>
        </div>

        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              rel="noreferrer">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}

          {/* {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
