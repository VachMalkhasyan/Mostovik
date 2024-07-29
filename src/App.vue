<template>
  <div id="app">
    <Section0 />
    <AboutUs/>
    <Welcome/>
    <WhyChooseUs/>
    <OurServices/>
    <h1 style="display: flex; justify-content: center"> ՄԵՐ ԱՇԽԱՏԱՆՔՆԵՐԸ</h1>
    <CommunityCards
        heading="2020"
        :communities="existingCommunities"
    />
    <CommunityCards
        heading="2019"
        :communities="communities2019"
    />
    <CommunityCards
        heading="2018"
        :communities="communities2019"
    />
  </div>
</template>

<script>
import Section0 from './components/Section0.vue';
import AboutUs from "@/components/AboutUs.vue";
import CommunityCards from './components/CommunityCards.vue';
import OurServices from "@/components/OurServices.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import Welcome from "@/components/Welcome.vue";

export default {
  name: 'App',
  components: {
    Welcome,
    WhyChooseUs,
    OurServices,
    Section0,
    AboutUs,
    CommunityCards
  },
  data() {
    return {
      showComunityCardsSection: false,
      existingCommunities: [
        "Քաղցրաշենի համայնքապետարան NԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-1",
        "Շահումյանի համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-2",
        "Դալարի համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-3",
        "Արաքսավան համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-4",
        "Վերին Արտաշատի համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-5",
        "Դիտակի համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-6",
        "Մխչյանի համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-7",
        "Այգեպատի համայնքապետարան N ԱՄ-ՀԲՄԱՇՁԲ-20/1-ԱՄ-8",
        "Այգավանի համայնքապետարան N ԱՀՄԱ-ԱՇՁԲ-20/24",
      ],
      communities2019: [
        "Թեգեառ Գոռավանի համայնքապետարան ԱՄԳՀ-ԳՀԱՇՁԲ-19/01",
        "Ավշարի համայնքապետարան ԱՄԱՀ-ԳՀԱՇՁԲ-19/08",
        "Ավշարի համայնքապետարան",
        "Ավշարի համայնքապետարան",
        "Ավշարի համայնքապետարան",
        "Մասիսի Զարգացման Հիմնադրամ",
        "Դիմիտրով  համայնքապետարան ԱՄԴՀ-ԳՀԱՇՁԲ-19/02",
        "Արտաշատի պահածոների Գործարան",
        "Լանջազարդ  համայնքապետարան ԱՄԼՀ-ԳՀԱՇՁԲ-19/02",
        "Եղեգնավան  համայնքապետարան ԱՄԵՀ-ԳՀԱՇՁԲ-19/03",
        "Նեզամի  համայնքապետարան ԱՄՆՀ-ԳՀԱՇՁԲ-19/02",
        "<<Գրանդ Քենդի>> ՍՊԸ տարածքում ասֆալտապատման աշխատանքներ ԱՄ-ՇՀԱՇՁԲ-14/01-ԱՄ-3",
        "ՀՀ Արարատի մարզպետարան",
        "ՀՀ Արարատի մարզի Մասիսի և Արտաշատի տարածաշրջանների մարզային ճանապարհների պահպանում և շահագործում ԳԱԿ-ՇՀԱՇՁԲ-15/1-ՏԾԻԳ-16/1-10/2017",
        "ՀՀ ՏԿՏՏՆ ՀՀ Արարատի մարզի Մասիսի և Արտաշատի տարածաշրջանների միջպետական և հանրապետական ճանապարհների պահպանում և շահագործում",
      ],
    };

  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* For WebKit browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 12px; /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
  background: #f0f0f0; /* Background color of the scrollbar track */
  border-radius: 10px; /* Rounded corners for the scrollbar track */
}

::-webkit-scrollbar-thumb {
  background: #9c7b09; /* Color of the scrollbar thumb */
  border-radius: 10px; /* Rounded corners for the scrollbar thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #8a6b04; /* Slightly darker color on hover */
}

/* For Firefox */
.scrollable-element {
  scrollbar-width: thin;
  scrollbar-color: #9c7b09 #f0f0f0; /* thumb color and track color */
}

/* For Edge */
body {
  scrollbar-color: #9c7b09 #f0f0f0; /* thumb color and track color */
  scrollbar-width: thin;
}

</style>
