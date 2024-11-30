import Activity from "@/modules/activity/components/activity.component";
import { Layout } from "@/modules/commons/layouts/layout";

export default function Home() {
  return (
      <Layout>
        <section className = "home">
          <p className = "text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero maxime aut doloribus quas dolorum pariatur, cum illum odio eius suscipit magni quidem unde, porro velit nam voluptatem ipsum qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quia nihil dolor mollitia error, alias nisi earum aliquam illum quam aliquid dolores laudantium! Dolore itaque natus consequatur hic doloribus repellat.</p>
        </section>
        <section className= "mt-5">
          <h2 className = "text-white font-semibold text-3xl">¿Que estoy haciendo?</h2>
          <div className= "grid grid-cols-2 gap-3 mt-5">
          <Activity/>
          {
            //renderizar componentes actividades
          }
          </div>
        </section>
        <section className= "mt-8">
          <h2 className= "text-white font-semibold text-2xl">Soft Skills</h2>
          <div className="grid grid-cols-2 gap-3 mt-10">
            <div className= "py-5 px-8 shadow-lg rounded-lg bg-neutral-700 flex justify-between">
              <div className= "flex flex-col">
                <div className="flex gap-5">
                  <div className= "bg-neutral-600 p-5 rounded-xl flex -mt-10">icono</div>
                  <h3 className= "text-lg text-white font-semibold" >Soft skill</h3>
                </div>
                <p className= "text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at! Dolores doloremque dolorum maiores reprehenderit quae asperiores, vero officiis vel nam blanditiis esse, mollitia, ducimus qui nihil odio alias voluptatum.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
}
