library(tidyverse)

#### Pubs per year ####

data.frame(
  year = as.character(2014:2021),
  total = c(1,0,4,5,5,4,0,1)
) %>% 

  ggplot(aes(y=total,x=year)) +
  geom_col(fill="#807dba") +
  theme_void() +
  theme(text=element_text(color="#bdbdbd"),
        axis.text.x=element_text(color="#bdbdbd"),
        axis.text.y=element_text(color="#bdbdbd")) + 
  labs(x="",y="") +
  ggsave("images/pubs.png", width=8, height=1.6)
  