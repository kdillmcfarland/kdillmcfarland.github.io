library(tidyverse)

#### Pubs per year ####

data.frame(
  year = as.character(2014:2021),
  total = c(1,0,4,5,5,4,0,1)
) %>% 

  ggplot(aes(y=total,x=year))+
  geom_col(fill="#6a51a3") +
  theme_classic(base_size = 15) +
  labs(x="",y="Publications") +
  ggsave("images/pubs.png", width=6, height=3)
  