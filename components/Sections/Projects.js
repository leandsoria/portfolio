import { Pagination } from '@mui/material';
import ProjectCard from '../UI/ProjectCard';
import { ProjectArr } from '../dataArray';
import { useState, useEffect } from 'react';

const AMOUNT_PER_PAGE = 6;

const Projects = () => {
  const [amountPages, setAmountPages] = useState(0);
  const [firstTile, setFirstTile] = useState(0);
  const [lastTile, setLastTile] = useState(AMOUNT_PER_PAGE);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setAmountPages(Math.ceil(ProjectArr.length / AMOUNT_PER_PAGE));
    const getNewArr = ProjectArr.slice(firstTile, lastTile);
    setNewArr(getNewArr);
  }, [firstTile, lastTile]);

  const handlePageChange = (event, page) => {
    setFirstTile(AMOUNT_PER_PAGE * (page - 1));
    setLastTile(AMOUNT_PER_PAGE * page);
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center px-4 lg:px-8 py-14 lg:py-24 gradient-violet-fuchsia text-white"
    >
      <div className="flex flex-col justify-center text-center">
        <h2>Recent Works and Projects</h2>
        <h4 className="mb-12">
          Designs and projects that I&apos;ve worked recently.
        </h4>
        <div className="flex max-w-7xl flex-row flex-wrap gap-6 justify-center pb-12">
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
