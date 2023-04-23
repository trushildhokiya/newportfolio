import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExpData from '../static/data/ExpData';
import '../static/styles/Experience.css';

const Experience = () => {
  return (
    <div id='experience' className='p-1 lg:pl-[4rem] my-5'>
      <h2 className='font-Lobster text-[4rem] text-amber-400 mb-[10rem]'>Experience</h2>
      <div>
        <VerticalTimeline>
          {ExpData.map((element) => {
            return (
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(2,90,78)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(2,90,78)', color: '#fff' }}
                date={element.date}
                dateClassName='text-white'
                visible={false}
                icon={element.icon}
              >
                <h3 className="vertical-timeline-element-title font-Lato  pb-3 font-bold text-[1.5rem] timeline-title">{element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle font-bold  font-Nunito text-[0.8rem] timeline-subtitle">{element.subtitle}</h4>
                <p className='font-Nunito text-xl text-justify'>
                  {element.description}
                </p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
