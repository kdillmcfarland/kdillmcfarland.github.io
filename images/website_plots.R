setwd("~/Documents/GitHub/kdillmcfarland.github.io/images")
library(tidyverse)

#### Pubs per year ####

p1 <- data.frame(
  year = as.character(2014:2023),
  total = c(1,0,4,5,5,4,0,1,4,4)
) %>% 

  ggplot(aes(y=total,x=year)) +
  geom_col(fill="#807dba") +
  theme_void() +
  theme(text=element_text(color="#bdbdbd"),
        axis.text.x=element_text(color="#bdbdbd"),
        axis.text.y=element_text(color="#bdbdbd")) + 
  labs(x="",y="")

ggsave(p1, filename="pubs.png", width=8, height=1.6)
  
