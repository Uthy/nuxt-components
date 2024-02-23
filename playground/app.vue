<template>
  <div>
    <SiteHeader />
    <Button class="w-100">Primary</Button>
    <Timeline :timeline="[{
      dates: '1990 - 2002',
      title: 'The Early Years',
      description: 'NCRAD\'s roots trace back to its establishment as the Cell Bank Core, operating under the umbrella of the Indiana Alzheimer\'s Disease Center. During this period, our focus was on the recruitment of multiplex families for groundbreaking linkage studies. These foundational years set the stage for what NCRAD would become.'
      },
  ]" />
    <Container size="xl" class="rvt-p-tb-lg">
      <ContentDoc path="/readme" />
    </Container>
  </div>
</template>
