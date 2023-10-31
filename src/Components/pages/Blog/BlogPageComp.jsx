import { useLocation } from "react-router-dom";
import BlogPage from "./BlogPage";

const BlogPageComp = () => {
  const path = useLocation();

  return (
    <>
      {path?.pathname === "/blog/sheep-skin-rug-cleaning" ? (
        <BlogPage
          title={"Sheep Skin Rug Cleaning"}
          img={require(`../../../Assets/Images/Blogs/Sheep.jpg`)}
          content={
            <>
              <p>
                The sheepskin rug that lies in your home, whether it is in the
                living, in your bedroom, or someplace else where you love it,
                needs a groom to keep it soft, fluffy and beautiful.
              </p>
              <p>
                The sheepskin rug that lies in your home, whether it is in the
                living, in your bedroom, or someplace else where you love it,
                needs a groom to keep it soft, fluffy and beautiful.
              </p>
              <p>
                We ensure that your rug is in great care, and providing a
                regular wash for it not only restores it to its best self every
                time, but makes sure that it stays with you in the best
                condition for the longest time possible. Feel free to call us
                for more information at 1300 360 274 or email us at
                <span> info@purenbrightcleaning.com.au</span>
              </p>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/how-to-use-baking-soda-for-rug-cleaning" ? (
        <BlogPage
          title={"How to use baking soda for rug cleaning"}
          img={require(`../../../Assets/Images/Blogs/soda.jpg`)}
          content={
            <>
              <p>
                <span> Professional rug cleaners</span> have their own set of
                tools and techniques to clean rugs using baking soda. Learn
                about them here!
              </p>
              <p>
                Rugs, whether they are wall-to-wall or just a few area rugs,
                take a beating over time. You walk on them every day, spill on
                them, and don’t vacuum them nearly as often as you should. Rugs
                are also more transparent than other surfaces in your home, such
                as walls or floors. They’re formed of fibers and have a lot of
                holes and corners between the weaves or piles, making them
                perfect for absorbing aromas.
              </p>
              <p>
                Furthermore, the smoke has a strong odor – either it’s a habit,
                or you’ve burned something in the oven, or you’ve had a fire (as
                we recently experienced when our fireplace suddenly
                malfunctioned!). Another example is pets.
              </p>
              <p>
                You can spot-clean a rug for stains or steam-clean it for
                disinfection, but if your rug is overall in good health but has
                a persistent stench in the room, you should deodorize it. And,
                luckily, you could already have the tool you require in your
                cupboard!
              </p>
              <h3>Why Should You Clean Your Rug With Baking Soda?</h3>
              <p>
                Baking soda is a proven odor absorber that is also inexpensive
                and natural. “Baking soda’s particles sink deep into the rug,
                almost to the point where you can’t see them, to absorb and
                neutralize scents,” the manufacturer claims.
              </p>
              <p>
                Another benefit of baking soda is that it deodorizes. Because
                it’s a dry deodorizer rather than a spray, you needn’t be
                concerned about over-saturating your rug (or other upholstery)
                and risking stains, mold development, or bacteria growth if it
                doesn’t fully dry before it can be used again. Deodorizing with
                baking soda is also a breeze. This is how you do it.
              </p>
              <h3>How to Use Baking Soda to Deodorize Your rug?</h3>
              <p>What You’ll Require</p>
              <ul>
                <li>Baking Soda (one box)</li>
                <li>Vacuum</li>
              </ul>
              <h3>Rearrange your furniture: </h3>
              <p>
                Remove any furniture from the rug to gain access to the entire
                surface area. You should vacuum the rug to remove dirt, pet fur,
                and trash. (Do not use this time to spot-clean the rug; you want
                it to be dry for the next step.)
              </p>
              <h3>Mix in the baking soda as follows:</h3>
              <p>
                {" "}
                Apply baking soda liberally to the rug straight from the package
                or through a fine-mesh screen. If you have a deep-pile rug,
                sprinkle tiny amounts of baking soda and rub it in with your
                fingertips before moving on to the next section.
              </p>
              <h3>Let it absorb:</h3>
              <p>
                Bake the baking soda for several hours or overnight to absorb
                the scent.
              </p>
              <h3>Vaccum:</h3>
              <p>Remove the baking soda by vacuuming it.</p>
              <h3>Replace your furniture:</h3>
              <p>Replace everything in its proper spot and you’re done!</p>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/rug-cleaning-vs-carpet-cleaning" ? (
        <BlogPage
          title={"Rug Cleaning vs Carpet Cleaning"}
          img={require(`../../../Assets/Images/Blogs/versus.jpg`)}
          content={
            <>
              <p>
                Many people think that Rugs and carpets are the same thing and
                wash exactly in the same procedure. But the process of cleaning
                the rugs and carpets differs.
              </p>
              <p>
                There are various aspects of cleaning that carpet cleaners are
                unable to address. Carpet cleaners, for example, will just clean
                the front of your rug, ignoring the back, which holds a major
                percentage of the chemicals and contaminants that your rug has
                absorbed from the air. Rugs and carpets are often confused by
                people. Although both rugs and carpets should be cleaned every
                12-18 months, they require different cleaning methods,
                especially when it comes to difficult stains such as pet
                accidents, odors, and spills!
              </p>
              <h3>The Rug Industry</h3>
              <p>
                <span>Rug cleaning </span> and carpet cleaning are two different
                things. Carpet cleaning is the process of removing dirt, dust,
                and other debris from carpets using a vacuum cleaner or other
                machine. Rug cleaning, on the other hand, is the process of
                removing dirt, dust, and other debris from rugs using a brush or
                other tool. Rug cleaning is a more delicate process than carpet
                cleaning and should be done more carefully to avoid damaging the
                rug.
              </p>
              <p>
                What to Consider When Deciding Between Rug Cleaning and Carpet
                Cleaning
              </p>
              <p>
                If you’re trying to decide between rug cleaning and carpet
                cleaning for your home, there are a few things you’ll want to
                take into consideration. First, think about the size of the area
                you need to clean. If you have a large area of carpeting, it may
                be more efficient to hire a professional carpet cleaning
                service. However, if you only have a few rugs or a small area of
                carpeting, you may be able to do the job yourself with a rented
                rug cleaner or by hiring a professional rug cleaning service.
              </p>
              <p>
                Next, consider the type of fabric your rugs and carpets are made
                from. Some fabrics are more delicate than others and may require
                special care when cleaning. Carpets made from natural fibers
                like wool or silk, for example, will likely need to be dry
                cleaned by a professional to avoid damage. In contrast,
                synthetic carpets can usually be cleaned with a Rug rental
                machine or by hiring a professional carpet cleaning service.
              </p>
              <p>
                Finally, think about the level of soiling on your rugs and
                carpets. If they’re only lightly soiled, you may be able to get
                away with spot cleaning or vacuuming. However, if they’re
                heavily soiled,
              </p>
              <h3>
                Things to Avoid When Choose Between Art of Rugs and Carpets
                Cleaning
              </h3>
              <p>
                When it comes to choosing between rug cleaning and carpet
                cleaning, there are a few things you’ll want to avoid. Here are
                a few tips to help you make the best decision for your home:
              </p>
              <ul>
                <li>
                  Don’t choose one over the other based on price alone. Both rug
                  and carpet cleaning can be pricey, so it’s important to
                  compare services and reviews before making a decision.
                </li>
                <li>
                  Don’t forget about the environment. If you’re concerned about
                  the impact your cleaning choices have on the environment, be
                  sure to ask about green options for both rug and carpet
                  cleaning.
                </li>
                <li>
                  Don’t neglect your allergies. If you or someone in your family
                  has allergies, Don’t forget to ask about hypoallergenic
                  options for rug and carpet cleaning.
                </li>
              </ul>
              <h3>Cost Comparison of Rug and Carpet Cleaning</h3>
              <p>
                When it comes to cleaning your home, one of the most important
                choices that you’ll make is deciding between rug and carpet
                cleaning. Not only do you need to choose the correct method for
                your flooring type, but you also need to factor in cost. Here is
                a cost comparison of the rug and carpet cleaning to help you
                make the best decision for your home.
              </p>
              <h3>Rug Cleaning</h3>
              <p>
                Rug cleaning can be done in several ways, but the most common
                methods are dry cleaning or steam cleaning.{" "}
              </p>
              <h3>Dry cleaning:</h3>
              <p>
                Dry cleaning is often the more expensive option, but it is also
                the most effective option for delicate rugs.{" "}
              </p>
              <h3>Steam cleaning:</h3>
              <p>
                Steam cleaning is the best middle ground between cost and
                effectiveness, and it generally does a good job of getting your
                rug clean.
              </p>
              <h3>Carpet Cleaning</h3>
              <ul>
                <li>
                  Carpet cleaning is typically done with a steam cleaner,
                  although some companies may offer dry cleaning as an option.{" "}
                </li>
                <li>
                  Carpet cleaners will usually charge by the square foot, so if
                  you have a large area of carpeting to clean, it can end up
                  being quite costly.{" "}
                </li>
                <li>
                  Steam cleaning is generally very effective at getting carpets
                  clean, so it is worth the investment.
                </li>
              </ul>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/why-do-I-need-a-professional-rug-cleaner" ? (
        <BlogPage
          title={"Why do I need a professional rug cleaner?"}
          img={require(`../../../Assets/Images/Blogs/professional.jpg`)}
          content={
            <>
              <p>
                If your rug is dirt and unclean, Hire a professional{" "}
                <span>rug cleaner in Melbourne</span> to shine your rug again –
                It best Rug pickup and cleaner in Melbourne.
              </p>
              <p>
                Does your rug appear to be dirty and drab? If so, it’s time to
                hire a
                <span> professional rug cleaning service in Melbourne</span> to
                restore the shine of your rug and assure a longer lifespan.
              </p>
              <p>
                Hiring a professional rug cleaner should be one of your high
                priorities if you want to maintain your rugs clean. Not only
                will you be able to keep your home clean, but it will also be
                free of harmful dirt and germs. Furthermore, even though daily
                vacuuming can help keep dust and dirt at bay, some will remain
                trapped in the fibers. This could result in allergies and a
                variety of health problems. Not to mention the dirty paws of
                your pets, which could cause stains and discoloration on your
                rug. Aside from that, consider the following reasons for hiring
                professional rug cleaners in Melbourne.
              </p>
              <p>
                The majority of homes now have rugs on their floors, and the
                regular use of the item causes them to become unclean.
                Professional cleaning services are essential because they use a
                variety of chemical agents and equipment to extract filth from
                deep within the fabric.
              </p>
              <h3>
                Some of the benefits of professional rug cleaners are listed
                below :
              </h3>
              <p>
                It is common practice to employ a professional rug cleaning
                business to remove deep-seated dirt and ensure that the fibers
                are not damaged. Companies typically use steam cleaning to
                remove dirt and debris since it is a perfect blend of heat and
                vacuum.
              </p>
              <ul>
                <li> Time Saving</li>
                <li>Carpet cleaners have the good knowledge and experience</li>
                <li>Remove stains and Marks from the Rug</li>
                <li>Make a rug look like new</li>
                <li>Improve the Rug’s life span</li>
              </ul>
              <h3>Time-Saving</h3>
              <p>
                Professional rug cleaners are a real blessing, especially for
                busy people who want to keep their residences in good condition.
                They can easily schedule a rug cleaning and have your rug
                cleaned even if you are not present. This will also allow you to
                stay out of your home while your rug dries. Those who have tried
                cleaning their carpets will agree that it is an unskilled labor
                process that can take a full day to complete.
              </p>
              <h3>Carpet cleaners have the good knowledge and experience:</h3>
              <p>
                Hiring professionals is important for any job. This is also true
                for rug cleaners. Carpets are not for everyone, and they are
                more complicated than you may have imagined. First, you must
                calculate the amount of soap you will use for each liter of
                water. Soaking in the perfect soap water is also important, as
                it will prevent the growth of mold. Furthermore, only
                professionals have the necessary cleaning tools and equipment,
                as well as the knowledge of how to use them correctly and
                efficiently.
              </p>
              <p>Remove stain marks from Rugs:</p>
              <p>
                <span>Rug cleaners </span>
                can assist in removing even the most stubborn stain marks from
                rugs, making them look new and appealing. These professionals
                can assist in removing stains from all of the following surfaces
                using the hot extraction method:
              </p>
              <ul>
                <li> Spilled coffee</li>
                <li>Ink marks</li>
                <li>Wine, particularly red wine</li>
                <li>Dirt</li>
                <li>Stains caused by pets</li>
              </ul>
              <p>
                Once a professional rug cleaning is done, You can get rid of all
                the above Ugly spots. Various professional Rug cleaners in
                Melbourne are available.
              </p>
              <p>Make your rug look like new :</p>
              <p>
                Everyone desires a clean home and rugs. Property owners who rent
                out their properties to tenants should be aware that having
                clean rugs is critical when it comes to marketing rentals.
                However, it is also critical that the carpet be both inviting
                and beautiful. This is possible with the assistance of a
                professional carpet cleaning service. They are capable of
                removing stubborn stains as well as embedded dirt from carpets.
              </p>
              <p>
                Professional rug cleaners in Melbourne use a variety of cleaning
                processes, including hot water extraction to effectively remove
                debris from deep within the fibers and leave your carpet
                completely sanitized. Homeowners can reduce the accumulation of
                debris in carpets by cleaning and vacuuming properly.
              </p>
              <h3>Improve the rug’s lifespan:</h3>
              <p>
                It is feasible to restore the rug’s originality after hiring
                expert cleaners. A deep cleaning may extend the life of a carpet
                while also making it look new and clean.
              </p>
              <h3>Conclusion:</h3>
              <p>
                One of the most popular rug cleaning companies in Melbourne
                adopts smart and effective equipment to remove dirt and stains
                from rugs. If you are worried about improving the health
                condition of your kids and pets, be confident to get
                professional services from time to time.
              </p>
              <p>
                If you are getting professional rug cleaners can give you relief
                solutions. Cleaning a rug on your own is a bit hard. You can
                expect to receive effective and reliable rug cleaning services.
                You can call them at your convenience to rug pick up and
                cleaning services.
              </p>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/tips-for-cleaning-cowhide-rug" ? (
        <BlogPage
          title={"TIPS for cleaning cowhide Rug"}
          img={require(`../../../Assets/Images/Blogs/tips.jpg`)}
          content={
            <>
              <p>
                A Cowhide Rug is the complete skin and hair of a cow, cured
                using either a chrome tanning method or by the more
                environmentally friendly, vegetable tanning process. The result
                is a soft durable rug which retains the unique markings of the
                animal, although sometimes hides are re-dyed to create exotic
                prints.
              </p>
              <p>
                Cowhide rugs range in size from 20 to 50 square feet, depending
                on the size of the animal from which they were derived. Outsize
                carpets are available on the market, and they are manufactured
                by combining two or more hides.
              </p>
              <p>
                Each Cowhide Rug is unique in terms of color and pattern.
                Cowhide rugs are purchased primarily for two reasons. Either
                they are looking for a rug to complement an existing color
                scheme or they are looking for a rug to complement an existing
                colour scheme.
              </p>
              <p>
                Cowhide rugs, in addition to their beauty, can create a warm
                atmosphere in a bedroom or serve as a focal point on a wooden
                floor. Their arching lines can help to reduce the angularity of
                a room with straight walls. They can even be used in
                high-traffic locations like corridors due to their long-lasting
                characteristics.
              </p>
              <h3>Get 7 expert suggestions on how to clean a cowhide rug :</h3>
              <p>
                Due to the cowrug hide’s long-lasting natural characteristics,
                cowhide rugs function well in all places, including your home’s
                busiest areas. They are stain-resistant and, as previously
                stated, extremely simple to maintain. They can survive for many
                years without needing to be replaced due to the high quality of
                leather.
              </p>
              <h3>
                We sought advice from professionals on how to cowhide rug
                cleaning properly. In this essay, we discuss their proposals.
              </h3>
              <ul>
                <li>
                  <h3>Moving the rug around :</h3>
                </li>
                <p>
                  It’s a good idea to take the rug outside and shake it off now
                  and then. Although a vacuum cleaner may remove a lot of dust
                  and dirt from a rug, pulling it outside might release anything
                  that has permeated deeper into the cloth.
                </p>
                <p>
                  Shaking off the rug is a straightforward way to keep your
                  cowhide rug clean and long-lasting. It’s important to note
                  that you don’t have to beat the rug hard to get the dirt out.
                  Simply shake it vigorously till the dirt comes out.
                </p>
                <li>
                  <h3>Vacuum the rug:</h3>
                </li>
                <p>
                  {" "}
                  Vacuuming cowhide rugs is similar to vacuuming other types of
                  carpets. It will keep it clean and prevent any stains or dirt
                  from forming on it. Although a specific cleaning plan isn’t
                  required, it’s always a good idea to clean your cowhide rug
                  when you’re cleaning other materials.
                </p>
                <p>Here are some guidelines to follow:</p>
                <ul>
                  <li> You can vacuum the rug with hose attachments.</li>
                  <li>
                    However, if the suction is too strong, you can use a dust
                    buster instead.
                  </li>
                  <li>
                    Vacuuming in the direction of the hair is recommended by
                    experts.
                  </li>
                  <li>Make sure the vacuum’s bristles aren’t moving.</li>
                </ul>
                <li>
                  <h3>Remove stains with wash and water :</h3>
                </li>
                <p>
                  Using a mixture of water and shampoo, you may clean minor
                  stains from your cowhide rug. This method works well for
                  removing the stain and recovering your cowhide.
                </p>
                <p>Follow these Tips:</p>
                <p>
                  Apply the shampoo-water mixture to the cowhide rug with a wet
                  rag or sponge. Start with a small amount of shampoo and add
                  more as needed.
                </p>
                <ul>
                  <li>
                    {" "}
                    You can rub and scrub in any direction, unlike brushing.
                  </li>
                  <li>
                    Make sure the towel or sponge isn’t completely saturated.
                  </li>
                  <li>Avoid alkaline shampoos and soaps at all costs.</li>
                </ul>
                <li>
                  <h3>Getting rid of food stains:</h3>
                </li>
                <p>
                  A butter knife or a brush can effectively remove food stains
                  from your cowhide rug. Scrape in the same direction as the rug
                  fibres until the stains are gone.
                </p>
                <p>
                  If the stain persists, a moist cloth with a small amount of
                  non-alkaline soap or a solution of white vinegar and water
                  should remove the majority of the food stains from the rug.
                  When you observe the stains on the surface, brush the area
                  with a dry towel to remove the spots.
                </p>
                <li>
                  <h3>Remove Grease stains on cowhide carpets:</h3>
                </li>
                <p>
                  Is your rug stained with grease? Do not be afraid or
                  frightened. Begin by lightly scraping away the grease using a
                  brush or anything with hard bristles as best you can. Experts
                  recommend dabbing a small amount of eucalyptus oil on top of
                  the discoloration.
                </p>
                <p>
                  It is a reliable method for removing stains from cowhide
                  carpets. Apply a small bit of oil and rub it in completely
                  with a dry, clean rag. If the stain persists, repeat the
                  procedure until the stain is removed.
                </p>
              </ul>
              <h3>Getting Rid of Liquid Stains:</h3>
              <p>
                You can’t afford to spend time while dealing with tea, red wine,
                or coffee. Begin right away by following these steps for
                efficiently washing a cowhide rug:
              </p>
              <p>You’ll need the following items:</p>
              <ul>
                <li>Water</li>
                <li>a paper towel</li>
                <li>Knife Sponge Shampoo, and a rag</li>
              </ul>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/how-to-wash-rugs-for-best-results" ? (
        <BlogPage
          title={"How to Wash Rugs for Best Results?"}
          img={require(`../../../Assets/Images/Blogs/wash.jpg`)}
          content={
            <>
              <p>
                Making up a home being a household is the worst part that can
                ever found. Commercial rugs are made up synthetic fiber which
                helps in absorbing dust and moist around the floor. To clean the
                rug, lay the rug flat and allow the top of the rug to dry
                completely. Then, flip it over to let the bottom side dry. Fans
                can help speed up the process. Make sure the rug is fully dry
                before you return it to the room.
              </p>
              <h3>1. Remove Excess Water</h3>
              <p>
                There are a few steps you must do to properly dry out your rug
                after it’s been substantially wet. First, start by removing the
                excess water that is present on the surface of it using towels
                or any other absorbent material you may have available. Place
                the rug in between two layers of towels and press down firmly to
                pull out any remaining water.
              </p>
              <p>
                You will be amazed at how much more water you can wring out of
                your wet towels by simply jumping on them. This is especially
                true for larger or bulkier items like a blanket, towel set, and
                the like. Once it becomes apparent that these heavy-duty fabrics
                are absorbing all they need to from this repeated process just
                replace them with another dry one over the same area for
                continued absorption!
              </p>
              <h3>2. Rug Drying</h3>
              <p>
                If the weather cooperates, there is no better way to dry your
                rug than by hanging it outside a warm sunny spot. For smaller
                rugs, use dying pin to hang them straight; for larger ones you
                may need something more substantial like a rack system that will
                keep things tidy and allow air movement on both sides of the
                fabric. If you’re drying a rug and it’s dry outside, then using
                fans is an option. Dry your rug with any other supportive
                objects, and point one side of the fan at the floor on that end.
                Make sure there are no obstructions on either side so that air
                can pass freely across both sides equally for complete dryness!
              </p>
              <h3>3. Dry Wet Padding</h3>
              <p>
                If you washed rug, you’ll want to make sure it’s dry before
                covering it with a rug again. Most pads are of a manageable size
                and can be taken outside for a fresh breeze and direct sunlight
                can handle the drying process for you. Be careful while handling
                a wet rug pad, depending on the type of material made the total
                weight of the water could cause the rug pad to tear through. A
                wet/dry vacuum could come in handy again here. Use the vacuum to
                remove most of the moisture before moving the rug outside. For
                larger rug pads, hanging them may not be a viable option. In
                that case, it’s likely best to roll your rug pad to provide more
                stability while moving it. Find a dry area, perhaps in a garage
                or other area near power. Support the rug with boards, blocks,
                bricks, anything you have available to lay it out off of the
                ground. Much like we treated the rug, we want to set fans along
                one side to keep a flow of air moving under and through the pad.
                This will remove any remaining moisture.
              </p>
              <h3>4. Disinfect and Deodorize</h3>
              <p>
                No matter how you dried the whole rug, it is important how it is
                dried & to check whether it is totally dried or else consists of
                any moisture to get dried or to , it is important that after the
                drying process a deodorizer and disinfectant are used. If you
                have a synthetic rug, you can rubbing alcohol which will kill
                bacteria left in from water as well as any lingering odours such
                as fishy smells caused by pet accidents (avoid bleach, as it can
                leave stains). <br />
                For the best results, fill up a spray bottle with rubbing
                alcohol and all sides of the rug. Let it air dry and repeat as
                needed to remove that foul smell! This process is only for
                antique rugs. It’s best to use a professional rug cleaner.
              </p>
              <h3>5. Does Vacuuming Dry Carpet?</h3>
              <p>
                Yes, vacuuming does dry carpets, this is where the wet/dry
                vacuum comes in hand. It’s not limited to cleaning a dry surface
                but also a wet surface. When using it, make sure its filter is
                water safe or made from sponge. A paper filter will be
                disintegrated upon exposure to water. While this won’t work for
                a moist carpet, the wet/dry vacuum works for carpets that are
                extremely wet.
              </p>
              <h3>6. CONCLUSION:</h3>
              <p>
                Drying rugs can be a particularly tough chore for many, but it
                can be made easy with the correct equipment and skills. If you
                need to take your rug drying game up a notch because you have an
                oriental, persian rug, antique or valuable rug such as a family
                heirloom then a professional is needed.
              </p>
            </>
          }
        />
      ) : null}

      {path?.pathname ===
      "/blog/why-you-should-prefer-carpet-steam-cleaning-over-diy-cleaning-methods" ? (
        <BlogPage
          title={
            "Why You Should Prefer Carpet Steam Cleaning Over DIY Cleaning Methods?"
          }
          img={require(`../../../Assets/Images/Blogs/steam.jpg`)}
          content={
            <>
              <p>
                Carpets are one of the expensive investments people make for
                their decor. But we also need to spend time taking care of the
                carpets to look the same for years to come. Cleaning your
                carpets using DIY methods is not the right solution; it may
                damage the carpets and rugs. Having your carpet cleaned by
                professional carpet cleaners is always a good choice.
              </p>
              <p>
                Carpet cleaning not only gives a new shine, but it also makes
                your home’s air cleaner and healthier.
              </p>
              <p>
                If you are searching for why you should opt for carpet steam
                cleaning, then read below.
              </p>
              <h3>
                STEAM CARPET CLEANING REMOVES THE MOST DEMANDING AND MOST
                CHALLENGING DIRT.
              </h3>
              <p>
                Our carpets contain dirty pollutants and debris from our daily
                routine life. From pet odour, wine spillage, dead bugs,
                cigarette smoke to our furry pets, carpets are home to many
                allergens. While we expect fresh air, our daily activities
                involve contact with various pollutants and carry when we come
                back home. Further, young babies and our pets play a lot on
                carpets, and they are the ones who come in contact with the
                dirty carpets. Using steam carpet cleaning, the professional
                carpet cleaners thoroughly clean the dust mites.
              </p>
              <h3>REFRESH, PRESERVE AND PROTECT YOUR CARPETS INVESTMENTS</h3>
              <p>
                The traditional carpets available in the market rarely wear out.
                But it starts losing the original colour. To retain its original
                beauty and look, it is recommended to steam clean the carpets
                every 6-8 months. The cleaning frequency can be adjusted as per
                the custom requirements.
              </p>
              <p>
                <span>Carpet steam cleaning ensures longer life</span>, gives a
                refreshing look again and helps protect your home’s air quality.
              </p>
              <h3>
                GET THE ORIGINAL COLOUR BACK AND GIVE A TREATMENT YOUR CARPET
                DESERVES
              </h3>
              <p>
                Imagine walking on a new and refreshingly looking cleaned carpet
                again. Sounds luxurious and comfortable? The more the cleaned
                carpets, the healthy and fresh air will be in your home.
                Cleaning your carpet is not only crucial for your health; it
                also gives you peace of mind while walking on the soft and shiny
                looking carpets.
              </p>
              <h3>LET’S MAKE YOUR CARPET A NEW WAY TO WELCOME YOUR GUESTS.</h3>
              <p>
                You may think to do the cleaning by yourself. But the advantage
                of hiring professional cleaners provides multiple benefits.
                Professional steam cleaning companies use powerful steam carpet
                cleaning equipment with eco-friendly cleaning solutions. They
                don’t just remove the stains, grit and grime — they also remove
                hidden pollutants and allergens.
              </p>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/why-do-you-need-rug-cleaning-experts" ? (
        <BlogPage
          title={"Sheep Skin Rug Cleaning"}
          img={require(`../../../Assets/Images/Blogs/Sheep.jpg`)}
          content={
            <>
              <p>
                A trendy addition to any apartment can be a nice looking area
                rug. By giving it a snug feel, it makes the room both cosy and
                inviting. The problem is that, from heavy foot traffic and pets,
                any area rug can be subjected to a large amount of dust and dirt
                on a regular basis. This appears to leave it looking colourless,
                jaded, and somewhat worse for wear.
              </p>
              <p>
                Of course, the old-fashioned way of keeping the dirt and dust
                out of an area rug used to be to take it outside, hang it up and
                use a big paddle-shaped appliance to beat the living daylights
                out of it. Currently, it’s still a good solution today, but
                probably not if you live in an apartment on the first floor.
              </p>
              <h3>Reliable</h3>
              <p>
                <span> Rug cleaning</span> alone can be time-consuming as well
                as wasteful. Rug cleaning Baton Rouge experts have rug cleaning
                methods that are quicker and more effective, and they have been
                using them for years. As experts, they know how to clean rugs of
                various sizes, fabrics and colours efficiently. These businesses
                also use state-of-the-art equipment and methods that are
                approved. The machines allow them to quickly remove stains and
                dirt from rugs while preserving the rug’s texture.
              </p>
              <h3>Remove the Need for Labour</h3>
              <p>
                You will have to move your furniture around so that you can
                vacuum the surface while you clean rugs. You will need to treat
                it with various cleaning solutions as well. You would need to
                repeat this arduous process every month, which can be
                time-consuming and tiring,
              </p>
              <p>
                To save you time, good local rug cleaners will handle this
                process with ease. They can even save you from the agony of
                pushing heavy furniture or leaning into secret parts of the
                vacuum.
              </p>
              <h3>Improves The Air Quality</h3>
              <p>
                As a homeowner, when you’re inside, you’d like your children and
                yourself to breathe in dust-free air. Regularly vacuuming your
                rug can just get rid of the chemicals on the floor. Those inside
                the fibres of the rug will stay within and prosper. In the
                household, they may cause illness. The microscopic particles as
                well as those on the surface can be eliminated by rug cleaning
                companies to create improved air quality inside the home.{" "}
              </p>
              <h3>Life of The Carpet is Extended</h3>
              <p>
                Good quality rugs are a good investment as they offer a
                sophisticated feel to rooms. Hiring professional cleaners will
                help extend your carpet’s existence and preserve its pristine
                appearance. Via thorough cleaning and frequent disinfection,
                regular rug maintenance can also prolong the life of your rug
                and give it a new and clean look.
              </p>
              <h3>They Provide Guarantee</h3>
              <p>
                For all their services, good rug cleaners give money guarantees,
                and they typically range from fourteen to thirty days. If there
                are some minor problems with the cleaning services, this package
                can also include free follow-up cleaning.
              </p>
              <h3>Wrapping Up</h3>
              <p>
                At <strong> Pure N Bright</strong>, we offer the best{" "}
                <span> rug cleaning services</span>. We are passionate about
                rugs and aspire to fulfill all our customer’s needs. The secret
                to producing superior results is that it is easy to identify and
                appreciate the building materials and dyes used in your rugs.
                Taking care of your rug will prolong its life with occasional
                dusting & washing and keep it looking fabulous.{" "}
                <span> Contact us</span> now to help you in achieving your
                needs.
              </p>
            </>
          }
        />
      ) : null}

      {path?.pathname ===
      "/blog/what-is-best-for-you-rug-steam-dry-or-traditional-hand-cleaning" ? (
        <BlogPage
          title={
            "What is Best for You? Rug Steam, Dry or Traditional Hand Cleaning?"
          }
          img={require(`../../../Assets/Images/Blogs/traditional.jpg`)}
          content={
            <>
              <p>
                Despite the best efforts and maintenance regimes, the carpets
                and rugs are prone to stains, accumulated grime and dirt. There
                is always a day when you can exclaim ‘O! My carpets and rugs
                need some professional cleaning. Look at how dirty they look!’.
                Now, with so many techniques to choose from, it is difficult to
                decide which method is perfect for your carpet cleaning.
              </p>
              <p>
                The most common methods of <span> carpet cleaning</span> are
                steam cleaning, traditional hand cleaning and dry cleaning. But,
                does one have advantages over the other? Which method is more
                effective? How can you decide which one to choose for your
                carpets? Pure N Bright carpet steam cleaners professionally
                restore and maintain the look and feel of your carpets at
                affordable rates. Here, we answer all your concerns and decide
                which method of carpet cleaning is the most effective.
              </p>
              <p>
                FACT!! The leading carpet manufacturers also recommend that
                steam cleaning or hot water extraction method works the best for
                your carpets. As it is the latest and advanced way of cleaning
                the carpets, it has surpassed the old-fashioned techniques due
                to high effectiveness.
              </p>
              <h3>HOW TRADITIONAL HAND CLEANING WORKS?</h3>
              <p>
                Traditional hand cleaning ensures your carpets and rug’s beauty
                for generations. When regularly cleaned, cleaning protects the
                fibres and revitalizes your rug’s rich colours without further
                damaging.
              </p>
              <p>
                Our technicians perform a bespoke inspection program for each
                rug piece. Our technique, based on traditional practices, is
                entirely chemical-free and ecologically friendly. This organic
                process has been practised for thousands of years.
              </p>
              <h3>WHY STEAM CLEANING IS BETTER THAN DRY CLEANING?</h3>
              <p>
                Dry cleaning involves the use of chemicals and also is
                ineffective on stubborn stains. To remove these stubborn stains,
                the cleaning companies use more chemical-based cleaning
                solutions which can actually harm the fibers of the carpet.
                Whereas, a deep steam cleaning method uses{" "}
                <span> eco-friendly cleaning solutions </span> and advanced
                equipment to clean the carpets more effectively and without
                considerable damage. It is also human and pet-friendly and does
                no harm to the environment.
              </p>
              <h3>HOW DOES DEEP STEAM CARPET CLEANING WORK?</h3>
              <p>
                The water is heated to high temperatures and allowed to
                penetrate the deeper fibers of the carpet. The suction
                technology soaks up the excess water with the dislodged grime,
                leaving minimum moisture in the carpets. Moreover, the heated
                application gets rid of allergens, harmful microorganisms, and
                toxins.
              </p>
              <h3>TOP ADVANTAGES OF STEAM CLEANING:</h3>
              <ul>
                <li>Non-toxic and non-poisonous</li>
                <li>Safe for children, pets, and overall environment</li>
                <li>The best method to work against allergic reactions</li>
                <li>Cost-effective and time-saving</li>
                <li>High temperatures can even remove molds</li>
              </ul>
              <p>
                At Pure N Bright Cleaning, we generally use deep steam cleaning
                for the best results and to increase the longevity of your
                carpets and rugs. Our certified technicians and experienced
                cleaners know what is best for the carpets and rugs!
              </p>
              <p>
                <strong>Warning:</strong>
                We always highly recommend getting it done by professionals as
                doing it on your own might damage your carpets and rugs.
              </p>
            </>
          }
        />
      ) : null}

      {path?.pathname === "/blog/how-to-clean-a-rug" ? (
        <BlogPage
          title={"How to Clean a Rug?"}
          img={require(`../../../Assets/Images/Blogs/clean.jpg`)}
          content={
            <>
              <p>
                Rugs are expensive and delicate. Cleaning a rug is very
                different from cleaning any other piece of fabric. They are
                delicate and prone to irreversible damages if you do not clean
                them with care. Moreover, rugs cost a lot; you must preserve
                your investment. Without saying, upkeep and regular vacuuming,
                elimination of dust, bugs, and rapid handling of stains and
                spills are crucial to rug cleaning.
              </p>
              <p>
                However, for valuable and subtle rugs made of wool or that are
                hand-knitted, a rug and carpet care professional such as Pure N
                Bright will likely be required.
              </p>
              <h3>FOLLOWING IS A STEP-BY-STEP GUIDE TO CLEAN A RUG:</h3>
              <h3>Maintaining a Clean Rug</h3>
              <ul>
                <li>Vacuum your rug periodically</li>
                <li>Revolve the rug to balance out wear and tear</li>
                <li>Roll rugs while moving and storing</li>
                <li>
                  Use diluted white vinegar to reinstate carpet tint and gloss
                </li>
                <li>Sprinkle borax on the rug to eliminate insect plagues.</li>
              </ul>
              <h3>Treating Spots and Stains</h3>
              <ul>
                <li>Clean spots or stains the moment they appear</li>
                <li>
                  Blot the spillage and remove any solid debris by scraping.
                </li>
                <li>Treat the rug according to the spill.</li>
                <li>Use a fan to dry the rug.</li>
              </ul>
              <h3>Tips and Tricks:</h3>
              <ul>
                <li>Use a piece of white cotton to blot the spot.</li>
                <li>Use a HEPA approved vacuum and filter bag</li>
                <li>
                  Purchasing a carpet cleaner/extractor if you don’t have one.
                </li>
              </ul>
              <h3>Precautions</h3>
              <ul>
                <li>
                  Do not vacuum fringe or tassels. They are too delicate to
                  vacuum.
                </li>
                <li>Do not soak the carpet, merely damp it</li>
                <li>Do not force dry; let your carpet dry naturally.</li>
                <li>
                  Make sure no pets or children around when cleaning. Some
                  disinfectants and cleaning agents are toxic.
                </li>
                <li>Do not use carpet shampoo on a woollen rug.</li>
                <li>Don not dry in the open sun.</li>
              </ul>

              <p>
                Pure N Bright provides <span> rug cleaning in Melbourne</span>.
                Call us if you think you don’t want to take a chance with your
                carpet and would rather rely on an expert. Call Pure N Bright—
                <span>1300 360 274</span>
              </p>
            </>
          }
        />
      ) : null}
    </>
  );
};

export default BlogPageComp;
