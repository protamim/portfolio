const Skills = () => {
  return (
    <>
      <section className="pb-12">
        <h2 className="text-4xl font-extrabold pb-8">
          <span className="text-green-500">Tec</span>h Stack
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div>
            <h3 className="mb-5 text-xl font-extrabold">Languages</h3>
            <ul className="flex gap-3 flex-col text-sm text-gray-400">
              <li>
                <span>HTML</span>
              </li>
              <li>
                <span>CSS</span>
              </li>
              <li>
                <span>JavaScript</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-extrabold">Frameworks</h3>
            <ul className="flex gap-3 flex-col text-sm text-gray-400">
              <li>
                <span>React</span>
              </li>
              <li>
                <span>Express.js</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-extrabold">CSS Framework</h3>
            <ul className="flex gap-3 flex-col text-sm text-gray-400">
              <li>
                <span>Tailwind CSS</span>
              </li>
              <li>
                <span>Bootstrap</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-extrabold">Database</h3>
            <ul className="flex gap-3 flex-col text-sm text-gray-400">
              <li>
                <span>MongoDB</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-extrabold">Version Control</h3>
            <ul className="flex gap-3 flex-col text-sm text-gray-400">
              <li>
                <span>Git</span>
              </li>
              <li>
                <span>Github</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-extrabold">Server-Side</h3>
            <ul className="flex gap-3 flex-col text-sm text-gray-400">
              <li>
                <span>Node.js</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
