import Drawer from "@/app/components/Market/Drawer";
import MarketInfo from "@/app/components/Market/MarketInfo";
import InfoTab from "@/app/components/Market/InfoTab";


export default function MarketPage({params}) {
  var marketIndex = params.index;

  return (
    <div className="flex-col grow overflow-y-scroll">
      <h4>시장 상세 페이지</h4>
      <Drawer>
        <MarketInfo marketIndex={marketIndex}/>
        <InfoTab>
          tab content
        </InfoTab>
      </Drawer>
    </div>
  );
}
