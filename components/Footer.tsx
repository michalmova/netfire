import ColoredStripe from "@components/ColoredStripe"
import { brandName } from "@utils/globals"
import Token from "./icons/Token"

const Footer = () => {
  const AuthorsRights = () => (
    <span className="font-inter text-[11px] text-gray_3 font-normal leading-[13px]">
      © 2024 <strong>{brandName}</strong> All rights reserved. Unauthorized use or copying of this brand is strictly prohibited. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of <strong>{brandName}</strong>, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.`
    </span>
  )

  return (
    <>
      <div className="h-[113px] justify-center bg-gray w-full">
        <ColoredStripe />
        <div className="px-content h-full flex items-center justify-between gap-10 tracking-[0.07em]">
          <div className="flex items-center justify-center gap-5">
            <Token />
            <span className="font-exo font-semibold text-gray_2 text-2xl whitespace-nowrap">{brandName}</span>
          </div>
          <AuthorsRights />
        </div>
      </div>
    </>
  )
}

export default Footer