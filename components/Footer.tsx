import ColoredStripe from "@components/ColoredStripe"
import { brandName } from "@utils/globals"
import Token from "./icons/Token"
import ColoredText from "./ColoredText"

const Footer = () => {
  return (
    <footer className="bg-gray w-full">
      <ColoredStripe />
      <div className="padding_x py-6 h-full flex items-center justify-between gap-10">
        <div className="flex items-center justify-center gap-3">
          <Token />
          <span className="font-exo font-semibold text-gray_2 text-2xl whitespace-nowrap">{brandName}</span>
        </div>
        <ColoredText
          text={`© 2024 <colored>${brandName}</colored> All rights reserved. Unauthorized use or copying of this brand is strictly prohibited. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of <colored>${brandName}</colored>, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.`}
          textClasses="font-inter text-[11px] text-gray_3 font-normal leading-[13px]"
          coloredTextClasses="font-bold"
        />
      </div>
    </footer>
  )
}

export default Footer