import React from 'react'
import HeadImg from '../../assets/first-gas-large.jpg'
import OilRig from '../../assets/NorthDakota_MMorrison.jpg'
import DrillingOperations from '../../assets/Stena_Carron.jpg'
import dangerousHTML from './Helpers'

const GlobalOperations = props => {
  return (
    <div>
      <div className="page-head-img img">
        <img src={HeadImg} />
        <span>North Malay Basin Full Field Development, Malaysia</span>
      </div>
      <div className="inner-content">
        <h1 dangerouslySetInnerHTML={dangerousHTML(props.title)} />
        <section>
          <h4>Production</h4>
          <p>
            During 2017, the company sold higher cost, mature assets in the
            Permian Basin, Equatorial Guinea and Norway, consistent with our
            strategy to high grade and focus our portfolio on our highest return
            assets. Net production from assets sold in 2017 totaled
            approximately 55,000 barrels of oil equivalent per day.
          </p>
          <p>
            In 2017, net production averaged 306,000 barrels of oil equivalent
            per day, including Libya, compared with 322,000 barrels of oil
            equivalent per day in 2016. The decline in production year over year
            was primarily the result of asset sales associated with the
            strategic reshaping of the company’s portfolio, unplanned downtime
            resulting from a fire at the Shell-operated Enchilada platform in
            the Gulf of Mexico and natural field declines.
          </p>
          <p>
            In the Bakken, Hess’ operated rig count averaged 3.5 in 2017,
            slightly higher than the average rig count of 3.3 in 2016. The
            company brought 68 new wells on production in 2017, compared with
            100 wells in 2016, and delivered net production from the Bakken that
            was flat year on year at 105,000 barrels of oil equivalent per day.
          </p>
          <p>
            Based on positive production results from our 60 stage, 140,000
            pound proppant per stage completion design, we expect to achieve an
            average 10–15 percent uplift in estimated ultimate recovery and 180
            day cumulative initial production rates per well, compared with our
            previous 50 stage and 70,000 pound proppant per stage completion
            design. As a result, we have increased our estimate of net ultimate
            recovery from our Bakken acreage to 2.0 billion barrels of oil
            equivalent from our previous estimate of 1.7 billion barrels of oil
            equivalent, and we continue to evaluate and test additional enhanced
            completion techniques.
          </p>
          <p>
            In the Utica shale play in eastern Ohio, where the company
            participates through its 50 percent interest in a joint venture with
            CONSOL Energy, net production averaged 19,000 barrels of oil
            equivalent per day in 2017, compared with 29,000 barrels of oil
            equivalent per day in 2016. This reflects natural field declines, as
            Hess did not bring any new wells online in 2017.
          </p>
          <p>
            In the deepwater Gulf of Mexico, net production averaged 54,000
            barrels of oil equivalent per day in 2017, compared with 61,000
            barrels of oil equivalent per day in 2016. This decrease is
            primarily the result of unplanned downtime resulting from the fire
            at the Shelloperated Enchilada platform and natural field declines,
            partially offset by a 7,000 barrels of oil equivalent per day
            increase from the Tubular Bells Field (57 percent working interest,
            operator).
          </p>
          <p>
            At the Carigali Hess-operated Malaysia/Thailand Joint Development
            Area (50 percent working interest), net production averaged 37,000
            barrels of oil equivalent per day in 2017, compared with 34,000
            barrels of oil equivalent per day in 2016.
          </p>
          <p>
            In the Danish North Sea, net production from the South Arne Field
            (62 percent working interest, operator) averaged 10,000 barrels of
            oil equivalent per day in 2017, compared with 13,000 barrels of oil
            equivalent per day in 2016, reflecting natural field declines. In
            the fourth quarter of 2017, the company commenced a sales process
            for our interests in Denmark.
          </p>
        </section>
        <section className="img two">
          <img src={OilRig} />
          <span>Production Operations, North Dakota</span>
        </section>
        <section>
          <h4>Developments</h4>
          <p>
            At the North Malay Basin full field development project in the Gulf
            of Thailand (50 percent working interest, operator), Hess completed
            installation of the central processing platform and achieved first
            gas in July 2017 safely, on time and under budget. The completion of
            the full field development resulted in net production averaging
            11,000 barrels of oil equivalent per day in 2017, compared with
            5,000 barrels of oil equivalent per day in 2016. In the fourth
            quarter of 2017, North Malay Basin reached its planned plateau rate
            of approximately 28,000 barrels of oil equivalent per day of gas net
            to Hess, establishing the asset as a significant long-term, low-cost
            cash generator for the company.
          </p>
          <p>
            In the deepwater Gulf of Mexico, Hess continued to advance the
            Stampede development project (25 percent working interest,
            operator). In 2017, the company successfully installed the tension
            leg platform and topsides on location and completed the
            development’s first three production wells and all subsea work.
            First oil was achieved in January 2018.
          </p>
          <p>
            Offshore Guyana, Hess holds a 30 percent interest in the 6.6 million
            acre Stabroek Block. Esso Exploration and Production Guyana Limited,
            a subsidiary of ExxonMobil, is operator and holds a 45 percent
            interest. CNOOC Nexen Petroleum Guyana Limited holds the remaining
            25 percent interest.
          </p>
          <p>
            In June 2017, the first phase of the Liza development, on the
            Stabroek Block, was sanctioned. The project will develop, on a gross
            basis, approximately 450 million barrels of oil through a floating
            production, storage and offloading (FPSO) vessel with capacity of
            approximately 120,000 barrels of oil per day. Development drilling
            is planned to start in 2018 using the Noble Bob Douglas drillship.
            First production from the Liza Phase 1 development is expected by
            2020.
          </p>
          <p>
            Planning for a second phase of development at Liza is underway and
            expected to utilize an FPSO vessel with gross production capacity of
            approximately 220,000 barrels of oil per day. First oil from the
            Liza Phase 2 development is targeted for mid-2022. A third phase of
            development will focus on the Payara area and is expected to closely
            follow Liza Phase 2.
          </p>
        </section>
        <section className="img three">
          <img src={DrillingOperations} />
          <span>Drilling Operations, Offshore Guyana</span>
        </section>
        <section>
          <h4>Exploration</h4>
          <p>
            The world-class Liza-1 discovery in 2015 and subsequent exploration
            and appraisal drilling in 2016 brought the total discovered resource
            on the Stabroek Block, offshore Guyana, to more than 1 billion
            barrels of oil equivalent at the end of 2016. In March 2017, another
            oil discovery on the block was confirmed at the Snoek prospect
            located approximately five miles southeast of the Liza-1 discovery.
            The Snoek-1 exploration well encountered 82 feet of high quality,
            oil bearing sandstone reservoirs.
          </p>
          <p>
            Following the Snoek discovery, the Payara-2 appraisal well was
            drilled in the fourth quarter of 2017 and encountered 59 feet of
            high quality, oil bearing sandstone reservoirs. The Payara-2
            appraisal well confirmed Payara as a significant oil discovery.
          </p>
          <p>
            A fifth oil discovery on the Stabroek Block was announced in October
            2017 at the Turbot prospect located approximately 30 miles southeast
            of the Liza-1 well. The Turbot-1 exploration well encountered 75
            feet of high quality, oil bearing sandstone reservoirs. Drilling of
            an additional well at the Turbot discovery is planned for 2018.
          </p>
          <p>
            These five discoveries on the block – Liza, Payara, Snoek, Liza Deep
            and Turbot – are now estimated to have total recoverable resources
            of more than 3.2 billion barrels of oil equivalent, nearly triple
            the estimate since the end of 2016.
          </p>
          <p>
            Drilling of the Ranger-1 exploration well on the Stabroek Block
            began in November 2017, using the Stena Carron drillship. As
            announced in January 2018, the well resulted in a discovery and
            encountered approximately 230 feet of high quality, oil bearing
            carbonate reservoir. The Pacora-1 exploration well was drilled in
            February 2018 and resulted in a seventh oil discovery, encountering
            approximately 65 feet of high quality, oil bearing sandstone
            reservoir. Resources associated with the Ranger-1 and Pacora-1
            discoveries will be accretive to the more than 3.2 billion barrels
            of oil equivalent previously discovered on the block. Additional
            exploration drilling is planned on the Stabroek Block for 2018,
            including appraisal drilling at the Ranger discovery.
          </p>
        </section>
      </div>
    </div>
  )
}

export default GlobalOperations
