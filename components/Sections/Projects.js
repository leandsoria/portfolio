import { Pagination } from '@mui/material';
import ProjectCard from '../UI/ProjectCard';
import { ProjectArr, clientSitesArr } from '../dataArray';
import { useState, useEffect, useMemo } from 'react';

const AMOUNT_PER_PAGE = 6;

const Projects = () => {
  const [page, setPage] = useState(1);
  const [amountPages, setAmountPages] = useState(0);
  const [firstTile, setFirstTile] = useState(0);
  const [lastTile, setLastTile] = useState(AMOUNT_PER_PAGE);
  const [typeSelected, setTypeSelected] = useState(ProjectArr);
  const [newArr, setNewArr] = useState([]);

  const getNewArr = useMemo(() => {
    return typeSelected?.slice(firstTile, lastTile);
  }, [typeSelected, firstTile, lastTile]);

  useEffect(() => {
    setAmountPages(Math.ceil(typeSelected.length / AMOUNT_PER_PAGE));
    setNewArr(getNewArr);
  }, [firstTile, lastTile, typeSelected, getNewArr]);

  const handlePageChange = (event, page) => {
    setFirstTile(AMOUNT_PER_PAGE * (page - 1));
    setLastTile(AMOUNT_PER_PAGE * page);
    setPage(page);
  };

  const projectBtnHandler = () => {
    setTypeSelected(ProjectArr);
    handlePageChange(undefined, 1);
  };
  const clientBtnHandler = () => {
    setTypeSelected(clientSitesArr);
    handlePageChange(undefined, 1);
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center px-4 lg:px-8 py-14 lg:py-24 gradient-violet-fuchsia text-white "
    >
      <div className="flex flex-col justify-center items-center text-center w-full">
        <h2>Recent Works and Projects</h2>
        <h4 className="mb-8">
          Designs and projects that I&apos;ve worked recently.
        </h4>

        <div className="flex flex-col lg:flex-row max-w-md m-auto gap-4 mb-8">
          <button
            onClick={projectBtnHandler}
            className={`py-2 px-4 uppercase font-semibold text-xl text-center leading-none w-full h-full ease-in-out duration-500 relative z-[10]  hover:before:w-full before:block before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:transition-all before:ease-in-out before:duration-500 rounded-3xl overflow-hidden min-w-max text-white hover:text-violet-900 before:bg-white border-2 border-white' transition-all  ${
              typeSelected === ProjectArr
                ? 'before:w-full text-violet-900 pointer-events-none'
                : 'before:w-0'
            }`}
          >
            Personal Projects
          </button>
          <button
            onClick={clientBtnHandler}
            className={`py-2 px-4 uppercase font-semibold text-xl text-center leading-none w-full h-full ease-in-out duration-500 relative z-[10] before:w-0 hover:before:w-full before:block before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:transition-all before:ease-in-out before:duration-500 rounded-3xl overflow-hidden min-w-max text-white hover:text-violet-900 before:bg-white border-2 border-white' transition-all ${
              typeSelected === clientSitesArr
                ? 'before:w-full text-violet-900 pointer-events-none'
                : ''
            }`}
          >
            Launched Projects
          </button>
        </div>

        <div className="flex flex-row flex-wrap justify-center pb-12 gap-6 w-full max-w-7xl ">
          {newArr.map((cards) => (
            <ProjectCard
              key={Math.random()}
              title={cards.title}
              lang={cards.lang}
              img={cards.img}
              url={cards.url}
            />
          ))}
        </div>
        <Pagination
          count={amountPages}
          size="large"
          onChange={handlePageChange}
          className="m-auto"
          page={page}
          defaultValue={page}
          sx={[
            {
              button: {
                color: 'white',
                fontWeight: 700,
                '&:hover': {
                  backgroundImage:
                    'linear-gradient(to right, #16a34a, #14532d)',
                  opacity: 0.7,
                },
                '&:not(.Mui-selected):hover': {
                  backgroundImage:
                    'linear-gradient(to right, #16a34a, #14532d)',
                  opacity: 0.7,
                },
              },
              '.Mui-selected': {
                backgroundImage: 'linear-gradient(to right, #16a34a, #14532d)',
              },
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
